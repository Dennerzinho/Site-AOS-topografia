import React, { useState } from 'react';
import {
  Download,
  Image as ImageIcon,
  FileText,
  Copy,
  Check,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Sparkles,
  Loader2,
} from 'lucide-react';
import { toPng, toSvg, toBlob } from 'html-to-image';
import jsPDF from 'jspdf';

interface ExportToolbarProps {
  bannerRef: React.RefObject<HTMLDivElement | null>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  onOpenModal: (type: 'orcamento' | 'reuniao' | 'formulario') => void;
}

export const ExportToolbar: React.FC<ExportToolbarProps> = ({
  bannerRef,
  zoom,
  setZoom,
  onOpenModal,
}) => {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportMessage, setExportMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setExportMessage(msg);
    setTimeout(() => setExportMessage(null), 3500);
  };

  const handleExportPNG = async (pixelRatio: number, label: string) => {
    if (!bannerRef.current) return;
    try {
      setIsExporting(true);
      showToast(`Gerando PNG Alta Resolução (${label})...`);

      const dataUrl = await toPng(bannerRef.current, {
        cacheBust: true,
        pixelRatio: pixelRatio,
        backgroundColor: '#0A292A',
        style: {
          transform: 'none',
          margin: '0 auto',
        },
      });

      const link = document.createElement('a');
      link.download = `AOS-Topografia-${label.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
      showToast(`✓ Imagem ${label} exportada com sucesso!`);
    } catch (err) {
      console.error('Export PNG failed:', err);
      showToast('Falha na exportação. Tente novamente.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportSVG = async () => {
    if (!bannerRef.current) return;
    try {
      setIsExporting(true);
      showToast('Gerando Vetor SVG...');

      const dataUrl = await toSvg(bannerRef.current, {
        backgroundColor: '#0A292A',
      });

      const link = document.createElement('a');
      link.download = `AOS-Topografia-vector-${Date.now()}.svg`;
      link.href = dataUrl;
      link.click();
      showToast('✓ Arquivo SVG exportado!');
    } catch (err) {
      console.error('Export SVG failed:', err);
      showToast('Falha na exportação SVG.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportPDF = async () => {
    if (!bannerRef.current) return;
    try {
      setIsExporting(true);
      showToast('Gerando Documento PDF...');

      const dataUrl = await toPng(bannerRef.current, {
        pixelRatio: 2,
        backgroundColor: '#0A292A',
      });

      const element = bannerRef.current;
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const orientation = width > height ? 'landscape' : 'portrait';

      const pdf = new jsPDF({
        orientation: orientation,
        unit: 'px',
        format: [width, height],
      });

      pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
      pdf.save(`AOS-Topografia-Apresentacao-${Date.now()}.pdf`);
      showToast('✓ PDF Alta Resolução exportado!');
    } catch (err) {
      console.error('Export PDF failed:', err);
      showToast('Falha na exportação PDF.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleCopyToClipboard = async () => {
    if (!bannerRef.current) return;
    try {
      setIsExporting(true);
      showToast('Copiando imagem em alta resolução...');

      const blob = await toBlob(bannerRef.current, {
        pixelRatio: 2,
        backgroundColor: '#0A292A',
      });

      if (blob && navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        showToast('✓ Imagem copiada para a área de transferência!');
      } else {
        showToast('Recurso não suportado no navegador atual.');
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      showToast('Falha ao copiar.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {exportMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary-light text-white text-xs md:text-sm px-4 py-3 rounded-xl border border-white/30 shadow-2xl flex items-center gap-2.5 animate-fade-in">
          {isExporting ? (
            <Loader2 className="w-4 h-4 animate-spin text-white" />
          ) : (
            <Sparkles className="w-4 h-4 text-accent" />
          )}
          <span>{exportMessage}</span>
        </div>
      )}

      {/* Floating Top Control Toolbar */}
      <aside aria-label="Painel de Exportação e Visualização" className="sticky top-0 z-40 w-full bg-primary/90 backdrop-blur-md border-b border-white/[0.12] px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Brand / Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[11px] font-bold text-white tracking-widest uppercase px-2.5 py-1 bg-white/10 rounded-md border border-white/20">
              #0A292A &bull; WIREFRAME MINIMAL
            </span>
            <span className="hidden md:inline-block text-xs text-white/60">
              AOS Topografia &bull; Nova Santa Rita / RS
            </span>
          </div>

          {/* Center: Zoom / Layout Controls */}
          <div className="flex items-center gap-1 bg-primary-light border border-white/15 rounded-lg p-1">
            <button
              onClick={() => setZoom((z) => Math.max(0.4, Number((z - 0.1).toFixed(2))))}
              title="Diminuir Zoom"
              className="p-1.5 hover:bg-white/10 text-white rounded text-xs flex items-center transition cursor-pointer"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-semibold text-white px-2 min-w-[48px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(1.4, Number((z + 0.1).toFixed(2))))}
              title="Aumentar Zoom"
              className="p-1.5 hover:bg-white/10 text-white rounded text-xs flex items-center transition cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(1)}
              title="Ajustar 100%"
              className="p-1.5 hover:bg-white/10 text-white rounded text-xs flex items-center transition ml-1 cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right: Export and Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Quick Action: Orçamento */}
            <button
              onClick={() => onOpenModal('orcamento')}
              className="hidden lg:flex px-3 py-1.5 rounded-lg border border-white/30 hover:border-white text-xs font-medium text-white items-center gap-1.5 transition bg-white/5 hover:bg-white/10 cursor-pointer"
            >
              <span>Abrir Formulário</span>
            </button>

            {/* Copy Button */}
            <button
              disabled={isExporting}
              onClick={handleCopyToClipboard}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/20 hover:border-white text-xs font-medium text-white flex items-center gap-1.5 transition bg-white/5 hover:bg-white/10 disabled:opacity-50 cursor-pointer"
              title="Copiar imagem para clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
              <span className="hidden sm:inline">Copiar</span>
            </button>

            {/* SVG Button */}
            <button
              disabled={isExporting}
              onClick={handleExportSVG}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/20 hover:border-white text-xs font-medium text-white flex items-center gap-1.5 transition bg-white/5 hover:bg-white/10 disabled:opacity-50 cursor-pointer"
              title="Exportar Vetorial SVG"
            >
              <FileText className="w-3.5 h-3.5 text-white" />
              <span>SVG</span>
            </button>

            {/* PDF Button */}
            <button
              disabled={isExporting}
              onClick={handleExportPDF}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/20 hover:border-white text-xs font-medium text-white flex items-center gap-1.5 transition bg-white/5 hover:bg-white/10 disabled:opacity-50 cursor-pointer"
              title="Exportar PDF"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>PDF</span>
            </button>

            {/* High-Res PNG 2x */}
            <button
              disabled={isExporting}
              onClick={() => handleExportPNG(2, '2x High-Res')}
              className="px-3 py-1.5 rounded-lg border border-white/30 hover:border-white text-xs font-semibold text-white flex items-center gap-1.5 transition bg-white/10 hover:bg-white/20 disabled:opacity-50 cursor-pointer"
              title="Exportar PNG (2x)"
            >
              <ImageIcon className="w-3.5 h-3.5 text-white" />
              <span>PNG 2x</span>
            </button>

            {/* Ultra High-Res PNG 4x */}
            <button
              disabled={isExporting}
              onClick={() => handleExportPNG(4, '4x Ultra-HD')}
              className="px-3.5 py-1.5 rounded-lg bg-accent text-white hover:bg-accent-hover text-xs font-bold flex items-center gap-1.5 transition disabled:opacity-50 shadow-md cursor-pointer"
              title="Exportar Ultra HD para Apresentação ou Impressão (4x)"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Ultra HD (4x)</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
