import React from 'react';
import aosLogo from '../assets/aos-logo.png';
import {
  AOSLogo,
  ResidencialWireframe,
  ComercialWireframe,
  IndustrialWireframe,
} from './WireframeShapes';
import { ModalType } from './ContactModal';
import { Mail, MapPin, ArrowRight, MessageSquare, Linkedin, Instagram, Facebook, ClipboardList, Globe, Crosshair, Scissors, UserCheck, FileCheck2 } from 'lucide-react';

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
      className="w-full max-w-[1240px] mx-auto text-white selection:bg-accent selection:text-white box-border flex flex-col font-sans"
      style={{
        backgroundColor: 'transparent',
        color: '#FFFFFF',
      }}
    >
      {/* =========================================================================
          1) NAVBAR
          Logo com monograma AOS à esquerda, links centrais e botão pill à direita.
         ========================================================================= */}
      <header
        id="navbar"
        className="w-full px-6 sm:px-10 py-6 flex items-center justify-between border-b border-white/[0.12] bg-primary/95 backdrop-blur-md sticky top-0 z-30"
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
            href="#solucoes"
            className="hover:text-white transition-colors duration-200"
          >
            Soluções
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
            className="px-5 py-2.5 rounded-full bg-accent text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-accent-hover transition-all duration-200 shadow-sm cursor-pointer"
            style={{ backgroundColor: '#FE930E', color: '#FFFFFF' }}
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
        {/* Logo da empresa no lugar do título */}
        <img
          src={aosLogo}
          alt="AOS Topografia"
          className="h-16 sm:h-20 md:h-24 w-auto mb-8"
        />

        {/* Frase de posicionamento, na mesma tipografia dos botões */}
        <h1 className="text-sm sm:text-base md:text-lg font-heading font-bold uppercase tracking-wider text-white mb-8 max-w-3xl">
          Topografia de excelência, obras sem surpresas.
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
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#FE930E', color: '#FFFFFF' }}
          >
            <span>Marque uma reunião</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Botão 2: Peça um formulário (pill outline) */}
          <button
            type="button"
            onClick={() => onOpenModal('formulario')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white hover:border-white bg-transparent hover:bg-white text-white hover:text-primary font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
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
        className="w-full border-t border-b border-white/[0.12] px-6 sm:px-10 py-7"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.12]">
          {/* Stat 1: LOCALIZAÇÃO */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              LOCALIZAÇÃO
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold uppercase tracking-wider text-white">
              Nova Santa Rita / RS
            </span>
          </div>

          {/* Stat 2: EXPERIÊNCIA */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              EXPERIÊNCIA
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold uppercase tracking-wider text-white">
              10+ anos
            </span>
          </div>

          {/* Stat 3: SEGMENTOS */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              SEGMENTOS
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold uppercase tracking-wider text-white">
              3
            </span>
          </div>

          {/* Stat 4: GARANTIA */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
              GARANTIA
            </span>
            <span className="text-base sm:text-lg md:text-xl font-heading font-bold uppercase tracking-wider text-white">
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
            <h2 className="text-2xl sm:text-4xl font-heading font-bold uppercase tracking-wider text-white">
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
            className="wireframe-card p-7 sm:p-8 min-h-[300px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  SEGMENTO
                </span>
                <span className="text-xs font-heading font-bold text-accent tracking-wider">
                  01
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-white mb-3">
                Residencial
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Topografia confiável para quem deseja construir histórias em família.
              </p>
            </div>

            {/* Wireframe Geométrico 3D */}
            <div className="mt-5 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <ResidencialWireframe className="w-20 h-20 sm:w-24 sm:h-24" />
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-accent-hover flex items-center gap-1 cursor-pointer"
              >
                <span>Solicitar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 02: Comercial */}
          <div
            className="wireframe-card p-7 sm:p-8 min-h-[300px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  SEGMENTO
                </span>
                <span className="text-xs font-heading font-bold text-accent tracking-wider">
                  02
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-white mb-3">
                Comercial
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Soluções sob medida para empreendimentos comerciais de pequeno e grande porte.
              </p>
            </div>

            {/* Wireframe Geométrico 3D */}
            <div className="mt-5 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <ComercialWireframe className="w-20 h-20 sm:w-24 sm:h-24" />
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-accent-hover flex items-center gap-1 cursor-pointer"
              >
                <span>Solicitar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 03: Industrial */}
          <div
            className="wireframe-card p-7 sm:p-8 min-h-[300px] flex flex-col justify-between group"
            style={{ borderRadius: '12px' }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  SEGMENTO
                </span>
                <span className="text-xs font-heading font-bold text-accent tracking-wider">
                  03
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-white mb-3">
                Industrial
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Topografia industrial com tecnologia avançada e resultados de alta precisão.
              </p>
            </div>

            {/* Wireframe Geométrico 3D */}
            <div className="mt-5 pt-4 flex items-end justify-between border-t border-white/[0.08]">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <IndustrialWireframe className="w-20 h-20 sm:w-24 sm:h-24" />
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-accent-hover flex items-center gap-1 cursor-pointer"
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
        className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/[0.12]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Texto (5 colunas) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.28em] text-white/60 font-semibold mb-4 block">
              SOBRE NÓS
            </span>

            {/* Título */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-white mb-8">
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
                className="px-8 py-3.5 rounded-full bg-accent text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
                style={{ backgroundColor: '#FE930E', color: '#FFFFFF' }}
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
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">
                    AOS TOPOGRAFIA / EQUIPE EM CAMPO
                  </span>
                </div>
                <span className="text-[11px] text-white/40 font-mono">
                  10+ ANOS
                </span>
              </div>

              {/* Foto da equipe em campo */}
              <div className="w-full py-2">
                <img
                  src="/aos-equipe.webp"
                  alt="Equipe da AOS Topografia em campo"
                  className="w-full h-[320px] object-cover object-[50%_26%] rounded-lg"
                />
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
          6) SEÇÃO DE SOLUÇÕES
          Título: "Como podemos ajudar no seu projeto:"
          Grid de 6 cards claros: ícone laranja, descrição e botão "Saiba Mais!"
         ========================================================================= */}
      <section
        id="solucoes"
        className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/[0.12]"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-white mb-6">
            Como podemos ajudar no seu projeto:
          </h2>
          <p className="text-base text-white/70 leading-relaxed">
            Temos as soluções completas para obras, terrenos e projetos, com precisão, agilidade e segurança.
          </p>
        </div>

        {/* Grid de 6 cards claros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Solução 01: Levantamento Planialtimétrico */}
          <div className="bg-white rounded-[12px] p-7 h-full flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
              <ClipboardList className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-text-primary mb-3">
              Levantamento Planialtimétrico
            </h3>
            <p className="text-sm text-accent leading-relaxed mb-6">
              Medições detalhadas para projetos de engenharia e arquitetura.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-4 py-2 rounded-md border border-black/10 text-text-primary text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 02: Georreferenciamento de Imóveis Rurais */}
          <div className="bg-white rounded-[12px] p-7 h-full flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-text-primary mb-3">
              Georreferenciamento de Imóveis Rurais
            </h3>
            <p className="text-sm text-accent leading-relaxed mb-6">
              Conformidade legal e precisão na demarcação de propriedades.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-4 py-2 rounded-md border border-black/10 text-text-primary text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 03: Locação de Obras */}
          <div className="bg-white rounded-[12px] p-7 h-full flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
              <Crosshair className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-text-primary mb-3">
              Locação de Obras
            </h3>
            <p className="text-sm text-accent leading-relaxed mb-6">
              Marcação exata para execução de construções.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-4 py-2 rounded-md border border-black/10 text-text-primary text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 04: Desmembramento */}
          <div className="bg-white rounded-[12px] p-7 h-full flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-text-primary mb-3">
              Desmembramento
            </h3>
            <p className="text-sm text-accent leading-relaxed mb-6">
              Efetuamos a divisão regularizada de áreas urbanas e rurais.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-4 py-2 rounded-md border border-black/10 text-text-primary text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 05: Usucapião */}
          <div className="bg-white rounded-[12px] p-7 h-full flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-text-primary mb-3">
              Usucapião
            </h3>
            <p className="text-sm text-accent leading-relaxed mb-6">
              Suporte técnico para processos de regularização.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-4 py-2 rounded-md border border-black/10 text-text-primary text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 06: Retificação */}
          <div className="bg-white rounded-[12px] p-7 h-full flex flex-col items-start">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
              <FileCheck2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-text-primary mb-3">
              Retificação
            </h3>
            <p className="text-sm text-accent leading-relaxed mb-6">
              Correções de registros imobiliários com base em medições atualizadas.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-4 py-2 rounded-md border border-black/10 text-text-primary text-xs font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
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
        className="pt-24 pb-14 px-6 sm:px-10 border-t border-white/[0.12]"
      >
        {/* Bloco de Chamada Principal */}
        <div
          className="wireframe-card p-8 sm:p-14 text-center flex flex-col items-center mb-16 relative overflow-hidden"
          style={{ borderRadius: '12px' }}
        >
          <span className="text-xs uppercase tracking-[0.28em] text-white/60 font-semibold mb-4 block">
            PRÓXIMO PASSO
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-white mb-6 max-w-3xl">
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-lg flex items-center justify-center gap-2"
              style={{ backgroundColor: '#FE930E', color: '#FFFFFF' }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </button>

            {/* Botão: Peça um formulário */}
            <button
              type="button"
              onClick={() => onOpenModal('formulario')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white hover:border-white bg-transparent hover:bg-white text-white hover:text-primary font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
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
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href="mailto:aos.topografia@outlook.com"
                className="hover:text-white transition-colors"
              >
                aos.topografia@outlook.com
              </a>
            </div>

            {/* Endereço */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
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
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-primary-light/85 backdrop-blur-sm hover:bg-accent/15 hover:border-accent hover:text-accent flex items-center justify-center text-white transition-colors cursor-pointer"
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
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-primary-light/85 backdrop-blur-sm hover:bg-accent/15 hover:border-accent hover:text-accent flex items-center justify-center text-white transition-colors"
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
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-primary-light/85 backdrop-blur-sm hover:bg-accent/15 hover:border-accent hover:text-accent flex items-center justify-center text-white transition-colors"
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
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-primary-light/85 backdrop-blur-sm hover:bg-accent/15 hover:border-accent hover:text-accent flex items-center justify-center text-white transition-colors"
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
