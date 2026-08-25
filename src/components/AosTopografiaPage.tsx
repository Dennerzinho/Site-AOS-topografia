import React from 'react';
import {
  AOSLogo,
  ResidencialWireframe,
  ComercialWireframe,
  IndustrialWireframe,
  TopoMeshWireframe,
  GuaranteeWireframe,
  TheodoliteWireframe,
  GeodesicWireframe,
  TimelineWireframe,
} from './WireframeShapes';
import { ModalType } from './ContactModal';
import { Mail, MapPin, ArrowRight, MessageSquare, Linkedin, Instagram, Facebook } from 'lucide-react';

interface AosTopografiaPageProps {
  onOpenModal: (type: ModalType) => void;
  bannerRef?: React.RefObject<HTMLDivElement | null>;
}

export const AosTopografiaPage: React.FC<AosTopografiaPageProps> = ({
  onOpenModal,
  bannerRef,
}) => {
  // Direct WhatsApp click handler (no phone number text rendered on screen)
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de mais informações sobre os serviços de topografia e georreferenciamento da AOS Topografia.'
    );
    window.open(`https://api.whatsapp.com/send?phone=5551999999999&text=${text}`, '_blank');
  };

  return (
    <div
      ref={bannerRef}
      id="aos-topografia-layout"
      className="w-full max-w-[1240px] mx-auto bg-[#0A0A0A] text-white selection:bg-white selection:text-black box-border flex flex-col font-sans"
      style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
      }}
    >
      {/* =========================================================================
          1) NAVBAR
          Logo com monograma AOS à esquerda, links centrais e botão pill à direita.
         ========================================================================= */}
      <header
        id="navbar"
        className="w-full px-6 sm:px-10 py-6 flex items-center justify-between border-b border-white/[0.12] bg-[#0A0A0A]/95 backdrop-blur-md sticky top-0 z-30"
      >
        {/* Logo à esquerda */}
        <a href="#hero" className="flex items-center no-underline">
          <AOSLogo />
        </a>

        {/* Links centrais */}
        <nav className="hidden md:flex items-center space-x-9 text-sm font-medium text-white/90">
          <a
            href="#sobre"
            className="hover:text-white transition-colors duration-200"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="hover:text-white transition-colors duration-200"
          >
            Serviços
          </a>
          <a
            href="#diferenciais"
            className="hover:text-white transition-colors duration-200"
          >
            Experiência
          </a>
          <a
            href="#contato"
            className="hover:text-white transition-colors duration-200"
          >
            Contato
          </a>
        </nav>

        {/* Botão pill branco à direita */}
        <div>
          <button
            type="button"
            onClick={() => onOpenModal('orcamento')}
            className="px-5 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white/90 transition-all duration-200 shadow-sm cursor-pointer"
            style={{ backgroundColor: '#FFFFFF', color: '#0A0A0A' }}
          >
            Peça um orçamento
          </button>
        </div>
      </header>

      {/* =========================================================================
          2) HERO SECTION
          Eyebrow, título em duas linhas com tracking negativo, subtítulo e 2 CTAs.
         ========================================================================= */}
      <section
        id="hero"
        className="pt-20 sm:pt-28 pb-20 sm:pb-28 px-6 sm:px-10 text-center flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Eyebrow com letras maiúsculas e espaçamento */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.15] bg-white/[0.04] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <p className="text-[11px] sm:text-xs uppercase font-semibold tracking-[0.24em] text-white/90">
            TOPOGRAFIA &bull; NOVA SANTA RITA / RS
          </p>
        </div>

        {/* Título gigante em duas linhas com tracking negativo */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-extrabold text-white leading-[1.04] tracking-[-0.04em] mb-8 max-w-5xl">
          Topografia de excelência,
          <br className="hidden sm:inline" /> obras sem surpresas.
        </h1>

        {/* Subtítulo de apoio */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-normal mb-10">
          Com tecnologia e precisão, garantimos a base segura para que sua obra seja construída sem imprevistos.
        </p>

        {/* Dois botões lado a lado */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Botão 1: Marque uma reunião (pill preenchido branco) */}
          <button
            type="button"
            onClick={() => onOpenModal('reuniao')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#FFFFFF', color: '#0A0A0A' }}
          >
            <span>Marque uma reunião</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Botão 2: Peça um formulário (pill outline) */}
          <button
            type="button"
            onClick={() => onOpenModal('formulario')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/[0.35] hover:border-white bg-white/[0.03] hover:bg-white/[0.08] text-white font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Peça um formulário</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          3) BARRA DE STATS
          4 colunas com divisores em border-white/[0.12]
         ========================================================================= */}
      <section
        id="stats"
        className="w-full border-t border-b border-white/[0.12] px-6 sm:px-10 py-7 bg-[#0A0A0A]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.12]">
          {/* Stat 1: LOCALIZAÇÃO */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              LOCALIZAÇÃO
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-tight">
              Nova Santa Rita / RS
            </span>
          </div>

          {/* Stat 2: EXPERIÊNCIA */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              EXPERIÊNCIA
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-tight">
              10+ anos
            </span>
          </div>

          {/* Stat 3: SEGMENTOS */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              SEGMENTOS
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-tight">
              3
            </span>
          </div>

          {/* Stat 4: GARANTIA */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              GARANTIA
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold text-white tracking-tight">
              100%
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4) SEÇÃO DE SEGMENTOS
          Título: "Onde a gente atua", 3 cards numerados 01-03 com wireframes
         ========================================================================= */}
      <section id="servicos" className="pt-24 sm:pt-32 pb-20 px-6 sm:px-10">
        <div className="mb-14 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-semibold mb-2 block">
              SEGMENTOS DE ATUAÇÃO
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-[-0.035em] text-white">
              Onde a gente atua
            </h2>
          </div>
          <p className="text-sm text-white/70 max-w-md">
            Soluções completas com estações totais de alta precisão e receptores GNSS de dupla frequência para qualquer porte de projeto.
          </p>
        </div>

        {/* Grid de 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: Residencial */}
          <div
            className="wireframe-card p-7 sm:p-8 min-h-[380px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  SEGMENTO
                </span>
                <span className="text-xs font-heading font-bold text-white/70 tracking-wider">
                  01
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 tracking-tight">
                Residencial
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Topografia confiável para quem deseja construir histórias em família.
              </p>
            </div>

            {/* Wireframe Geométrico 3D */}
            <div className="mt-8 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <ResidencialWireframe className="w-24 h-24 sm:w-28 sm:h-28" />
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Solicitar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 02: Comercial */}
          <div
            className="wireframe-card p-7 sm:p-8 min-h-[380px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  SEGMENTO
                </span>
                <span className="text-xs font-heading font-bold text-white/70 tracking-wider">
                  02
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 tracking-tight">
                Comercial
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Soluções sob medida para empreendimentos comerciais de pequeno e grande porte.
              </p>
            </div>

            {/* Wireframe Geométrico 3D */}
            <div className="mt-8 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <ComercialWireframe className="w-24 h-24 sm:w-28 sm:h-28" />
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Solicitar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 03: Industrial */}
          <div
            className="wireframe-card p-7 sm:p-8 min-h-[380px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  SEGMENTO
                </span>
                <span className="text-xs font-heading font-bold text-white/70 tracking-wider">
                  03
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3 tracking-tight">
                Industrial
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Topografia industrial com tecnologia avançada e resultados de alta precisão.
              </p>
            </div>

            {/* Wireframe Geométrico 3D */}
            <div className="mt-8 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <IndustrialWireframe className="w-24 h-24 sm:w-28 sm:h-28" />
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="text-xs font-semibold uppercase tracking-wider text-white/80 group-hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Solicitar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5) SEÇÃO SOBRE
          Eyebrow: SOBRE NÓS, Título: "Nossa Experiência", 2 parágrafos,
          Malha wireframe topográfica em linhas finas brancas, CTA "Marque uma reunião"
         ========================================================================= */}
      <section
        id="sobre"
        className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/[0.12] bg-[#0A0A0A]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Texto (5 colunas) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.28em] text-white/60 font-semibold mb-4 block">
              SOBRE NÓS
            </span>

            {/* Título */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-[-0.035em] text-white mb-8">
              Nossa Experiência
            </h2>

            {/* Parágrafo 1 */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6 font-normal">
              Fundada no Rio Grande do Sul, nossa empresa se tornou referência em precisão e inovação em topografia. Nos últimos anos, fomos a empresa do setor que mais cresceu no estado, participando de grandes obras e conquistando a confiança de engenheiros, construtoras e arquitetos.
            </p>

            {/* Parágrafo 2 */}
            <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-10 font-normal">
              Com tecnologia de ponta e equipe qualificada, garantimos que cada projeto comece com dados confiáveis, segurança e tranquilidade para nossos clientes.
            </p>

            {/* CTA ao final */}
            <div>
              <button
                type="button"
                onClick={() => onOpenModal('reuniao')}
                className="px-8 py-3.5 rounded-full bg-white text-black font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
                style={{ backgroundColor: '#FFFFFF', color: '#0A0A0A' }}
              >
                <span>Marque uma reunião</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Coluna Visual Wireframe Topográfico (7 colunas) */}
          <div className="lg:col-span-6">
            <div
              className="wireframe-card p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between"
              style={{ borderRadius: '12px' }}
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/80" />
                  <span className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                    MALHA TOPOGRÁFICA / GEORREFERENCIAMENTO
                  </span>
                </div>
                <span className="text-[11px] text-white/40 font-mono">
                  DATUM SIRGAS 2000
                </span>
              </div>

              {/* Malha Vetorial de Relevo */}
              <div className="w-full flex items-center justify-center py-2">
                <TopoMeshWireframe className="w-full h-auto max-h-[300px]" />
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-white/50">
                <span>Precisão Milimétrica &bull; RTK / GNSS</span>
                <span>Nova Santa Rita / RS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6) SEÇÃO DE DIFERENCIAIS
          Título: "Por que a AOS?"
          Grid de cards 01-04 numerados com ícones/formas wireframe
         ========================================================================= */}
      <section
        id="diferenciais"
        className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/[0.12] bg-[#0A0A0A]"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-white/60 font-semibold mb-3 block">
            NOSSOS PILARES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-[-0.035em] text-white mb-6">
            Por que a AOS?
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Metodologia rigorosa e equipamentos calibrados para eliminar retrabalho e garantir conformidade técnica absoluta.
          </p>
        </div>

        {/* Grid 2x2 de Cards Numerados 01-04 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Diferencial 01: 100% de garantia de satisfação */}
          <div
            className="wireframe-card p-7 min-h-[360px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  DIFERENCIAL
                </span>
                <span className="text-xs font-heading font-bold text-white/70 tracking-wider">
                  01
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 tracking-tight">
                100% de garantia de satisfação
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Rigor técnico absoluto e conformidade com todas as normas ABNT em cada levantamento executado.
              </p>
            </div>

            <div className="mt-8 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <GuaranteeWireframe className="w-16 h-16 transform group-hover:scale-105 transition-transform duration-300" />
              <span className="text-xs font-mono text-white/50">ABNT / INCRA</span>
            </div>
          </div>

          {/* Diferencial 02: Equipes altamente capacitadas */}
          <div
            className="wireframe-card p-7 min-h-[360px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  DIFERENCIAL
                </span>
                <span className="text-xs font-heading font-bold text-white/70 tracking-wider">
                  02
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 tracking-tight">
                Equipes altamente capacitadas
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Engenheiros e agrimensores experientes operando equipamentos de alta precisão milimétrica.
              </p>
            </div>

            <div className="mt-8 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <TheodoliteWireframe className="w-16 h-16 transform group-hover:scale-105 transition-transform duration-300" />
              <span className="text-xs font-mono text-white/50">CREA-RS</span>
            </div>
          </div>

          {/* Diferencial 03: 10+ anos no ramo */}
          <div
            className="wireframe-card p-7 min-h-[360px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  DIFERENCIAL
                </span>
                <span className="text-xs font-heading font-bold text-white/70 tracking-wider">
                  03
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 tracking-tight">
                10+ anos no ramo
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Solidez comprovada em centenas de projetos executados com excelência por todo o Rio Grande do Sul.
              </p>
            </div>

            <div className="mt-8 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <GeodesicWireframe className="w-16 h-16 transform group-hover:scale-105 transition-transform duration-300" />
              <span className="text-xs font-mono text-white/50">Desde 2014</span>
            </div>
          </div>

          {/* Diferencial 04: Entrega nos prazos determinados */}
          <div
            className="wireframe-card p-7 min-h-[360px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  DIFERENCIAL
                </span>
                <span className="text-xs font-heading font-bold text-white/70 tracking-wider">
                  04
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 tracking-tight">
                Entrega nos prazos determinados
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Planejamento ágil e compromisso inegociável com o cronograma da sua obra.
              </p>
            </div>

            <div className="mt-8 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <TimelineWireframe className="w-16 h-16 transform group-hover:scale-105 transition-transform duration-300" />
              <span className="text-xs font-mono text-white/50">Pontualidade</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7) CONTATO / RODAPÉ
          Título: "Vamos começar sua obra do jeito certo."
          Botões: "Falar no WhatsApp" e "Peça um formulário"
          Informações (SEM telefone):
            E-mail: aos.topografia@outlook.com
            Endereço: Rua Carlos de Souza Pereira, 99 — Nova Santa Rita / RS
          Ícones sociais: Facebook, Instagram, LinkedIn, WhatsApp
          Linha final do rodapé: "AOS TOPOGRAFIA © 2026 — TOPOGRAFIA E GEORREFERENCIAMENTO"
         ========================================================================= */}
      <footer
        id="contato"
        className="pt-24 pb-14 px-6 sm:px-10 border-t border-white/[0.12] bg-[#0A0A0A]"
      >
        {/* Bloco de Chamada Principal */}
        <div
          className="wireframe-card p-8 sm:p-14 text-center flex flex-col items-center mb-16 relative overflow-hidden"
          style={{ borderRadius: '12px' }}
        >
          <span className="text-xs uppercase tracking-[0.28em] text-white/60 font-semibold mb-4 block">
            PRÓXIMO PASSO
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-[-0.035em] text-white mb-6 max-w-3xl">
            Vamos começar sua obra do jeito certo.
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            Fale com nossa equipe técnica para tirar dúvidas, solicitar um orçamento ou agendar uma vistoria no local da obra.
          </p>

          {/* Botões de Contato */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Botão: Falar no WhatsApp */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: '#FFFFFF', color: '#0A0A0A' }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </button>

            {/* Botão: Peça um formulário */}
            <button
              type="button"
              onClick={() => onOpenModal('formulario')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/[0.35] hover:border-white bg-white/[0.04] hover:bg-white/[0.08] text-white font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Peça um formulário</span>
            </button>
          </div>
        </div>

        {/* Grid de Informações de Contato (Sem números de telefone) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-t border-b border-white/[0.12]">
          {/* Coluna 1: Marca & Descrição */}
          <div className="md:col-span-5 flex flex-col">
            <AOSLogo className="mb-4" />
            <p className="text-xs sm:text-sm text-white/65 max-w-sm leading-relaxed">
              Topografia de excelência e georreferenciamento com soluções de alta precisão para obras residenciais, comerciais e industriais.
            </p>
          </div>

          {/* Coluna 2: Dados de Contato e Endereço */}
          <div className="md:col-span-4 flex flex-col space-y-3.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-white/50">
              CANAIS &amp; LOCALIZAÇÃO
            </span>

            {/* E-mail */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
              <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
              <a
                href="mailto:aos.topografia@outlook.com"
                className="hover:text-white transition-colors"
              >
                aos.topografia@outlook.com
              </a>
            </div>

            {/* Endereço */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
              <MapPin className="w-4 h-4 text-white/70 flex-shrink-0 mt-0.5" />
              <span>Rua Carlos de Souza Pereira, 99 — Nova Santa Rita / RS</span>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-3.5">
              REDES &bull; CONECTE-SE
            </span>

            <div className="flex items-center space-x-3">
              {/* WhatsApp */}
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-white/[0.04] hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-colors cursor-pointer"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </button>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-white/[0.04] hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-white/[0.04] hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-white/[0.04] hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-colors"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha final do rodapé */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-white/50 tracking-wider uppercase font-medium">
          <span>AOS TOPOGRAFIA &copy; 2026 — TOPOGRAFIA E GEORREFERENCIAMENTO</span>
          <span className="text-[11px] text-white/40">
            NOVA SANTA RITA &bull; RIO GRANDE DO SUL
          </span>
        </div>
      </footer>
    </div>
  );
};
