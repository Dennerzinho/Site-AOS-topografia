import React from 'react';

/**
 * Barra fixa no topo. Só identifica a empresa e a cidade.
 * Antes era o painel de exportação do AI Studio (zoom, PNG, SVG, PDF);
 * os controles foram removidos por não terem função no site publicado.
 */
export const ExportToolbar: React.FC = () => {
  return (
    <aside
      aria-label="Identificação da empresa"
      className="sticky top-0 z-40 w-full bg-primary/90 backdrop-blur-md border-b border-white/[0.12] px-4 py-2.5"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <span className="text-xs text-white/60 text-center">
          AOS Topografia
        </span>
      </div>
    </aside>
  );
};
