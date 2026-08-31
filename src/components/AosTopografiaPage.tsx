import React from 'react';
import aosLogo from '../assets/aos-logo.png';
import pilarComprometimento from '../assets/pilares/comprometimento.webp';
import pilarSeriedade from '../assets/pilares/seriedade.webp';
import pilarEquipamentos from '../assets/pilares/equipamentos.webp';
import pilarEquipe from '../assets/pilares/equipe.webp';
import pilarAtencao from '../assets/pilares/atencao.webp';
import parceiroLog from '../assets/parceiros/log.png';
import parceiroAncora from '../assets/parceiros/ancora.png';
import parceiroHenz from '../assets/parceiros/henz.png';
import parceiroTenda from '../assets/parceiros/tenda.png';
import parceiroCorsan from '../assets/parceiros/corsan.png';
import parceiroInnova from '../assets/parceiros/innova.png';
import parceiroDmae from '../assets/parceiros/dmae.png';
import parceiroLyx from '../assets/parceiros/lyx.png';
import parceiroSintra from '../assets/parceiros/sintra.png';
import parceiroAbf from '../assets/parceiros/abf.webp';
import parceiroAcepar from '../assets/parceiros/acepar.jpg';
import parceiroMorana from '../assets/parceiros/morana.png';
import {
  AOSLogo,
  WhatsAppIcon,
} from './WireframeShapes';
import { ModalType } from './ContactModal';
import { Mail, MapPin, ArrowRight, MessageSquare, Linkedin, Instagram, House, Building, Factory, ClipboardList, Globe, Crosshair, Scissors, UserCheck, FileCheck2 } from 'lucide-react';

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
    window.open(`https://api.whatsapp.com/send?phone=5551996818863&text=${text}`, '_blank');
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
        <a href="#hero" className="flex-1 flex items-center no-underline">
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
            Atuações
          </a>
          <a
            href="#solucoes"
            className="hover:text-white transition-colors duration-200"
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="hover:text-white transition-colors duration-200"
          >
            Contatos
          </a>
        </nav>

        {/* Botão de WhatsApp à direita */}
        <div className="flex-1 flex justify-end">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            aria-label="Falar no WhatsApp: (51) 9 9681-8863"
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-accent transition-colors duration-200 cursor-pointer whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>(51) 9 9681-8863</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          2) HERO SECTION
          Eyebrow, título em duas linhas com tracking negativo, subtítulo e 2 CTAs.
         ========================================================================= */}
      {/* Grid de 3 linhas (1fr / auto / 1fr): as duas linhas elasticas tem o
          mesmo tamanho, entao o slogan cai exatamente no meio do hero. A logo
          fica ancorada no topo e o botao logo abaixo do slogan.
          A altura desconta o que vem antes do hero na primeira tela: barra de
          identificacao (37px) + padding do main (0 / 16 / 32px) + borda do
          cartao (1px) + navbar (89px), mais 130px para o inicio da secao
          seguinte ja aparecer no rodape da primeira tela. */}
      <section
        id="hero"
        className="min-h-[calc(100svh_-_257px)] sm:min-h-[calc(100svh_-_273px)] md:min-h-[calc(100svh_-_289px)] py-6 sm:py-10 px-6 sm:px-10 text-center grid grid-rows-[1fr_auto_1fr] justify-items-center relative overflow-hidden"
      >
        {/* Logo da empresa no lugar do título */}
        <img
          src={aosLogo}
          alt="AOS Topografia"
          className="h-16 sm:h-20 md:h-24 w-auto self-start"
        />

        {/* Slogan, no centro vertical do hero. E o <h1> da pagina. */}
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-heading font-light uppercase tracking-[0.18em] text-white/70">
          Transformando medidas em resultados
        </h1>

        {/* Botão de orçamento, logo abaixo do slogan */}
        <div className="self-start pt-10 sm:pt-14 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Botão único, centralizado */}
          <button
            type="button"
            onClick={() => onOpenModal('orcamento')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-accent-hover transition-all duration-200 cursor-pointer shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#FE930E', color: '#FFFFFF' }}
          >
            <span>Faça seu orçamento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          3) SEÇÃO DE SEGMENTOS
          Título: "Onde a gente atua", 3 cards numerados 01-03 com wireframes
         ========================================================================= */}
      <section id="servicos" className="pt-10 sm:pt-12 pb-20 px-6 sm:px-10">
        <div className="mb-14 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold uppercase tracking-wider text-white">
              Onde a gente atua
            </h2>
          </div>
          <p className="text-sm text-white max-w-md">
            Soluções completas com estações totais de alta precisão e receptores GNSS de dupla frequência para qualquer porte de projeto.
          </p>
        </div>

        {/* Faixa compacta: 3 cards claros com icone laranja */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Residencial */}
          <div className="bg-white rounded-[12px] p-6 flex flex-col items-start border-8 border-primary">
            <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center mb-5">
              <House className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Residencial
            </h3>
            <p className="text-xs text-accent leading-relaxed">
              Topografia confiável para quem deseja construir histórias em família.
            </p>
          </div>

          {/* Comercial */}
          <div className="bg-white rounded-[12px] p-6 flex flex-col items-start border-8 border-primary">
            <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center mb-5">
              <Building className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Comercial
            </h3>
            <p className="text-xs text-accent leading-relaxed">
              Soluções sob medida para empreendimentos comerciais de pequeno e grande porte.
            </p>
          </div>

          {/* Industrial */}
          <div className="bg-white rounded-[12px] p-6 flex flex-col items-start border-8 border-primary">
            <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center mb-5">
              <Factory className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Industrial
            </h3>
            <p className="text-xs text-accent leading-relaxed">
              Topografia industrial com tecnologia avançada e resultados de alta precisão.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4) SEÇÃO SOBRE
          Título: "Nossa Experiência", 2 parágrafos,
          Malha wireframe topográfica em linhas finas brancas
         ========================================================================= */}
      <section
        id="sobre"
        className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/[0.12]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Texto (5 colunas) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Título */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-white mb-8">
              Nossa Experiência
            </h2>

            {/* Parágrafo 1 */}
            <p className="text-base sm:text-lg text-white leading-relaxed mb-6 font-normal">
              Fundada no Rio Grande do Sul, nossa empresa se tornou referência em precisão e inovação em topografia. Nos últimos anos, fomos a empresa do setor que mais cresceu no estado, participando de grandes obras e conquistando a confiança de engenheiros, construtoras e arquitetos.
            </p>

            {/* Parágrafo 2 */}
            <p className="text-base sm:text-lg text-white leading-relaxed mb-10 font-normal">
              Com tecnologia de ponta e equipe qualificada, garantimos que cada projeto comece com dados confiáveis, segurança e tranquilidade para nossos clientes.
            </p>
          </div>

          {/* Coluna Visual Wireframe Topográfico (7 colunas) */}
          <div className="lg:col-span-6">
            <div
              className="bg-white border-8 border-primary rounded-[12px] p-4 relative overflow-hidden flex flex-col justify-between"
              style={{ borderRadius: '12px' }}
            >
              <div className="flex items-center justify-between mb-3 border-b border-black/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-text-primary font-semibold">
                    AOS TOPOGRAFIA / EQUIPE EM CAMPO
                  </span>
                </div>
              </div>

              {/* Foto da equipe em campo */}
              <div className="w-full">
                <img
                  src="/aos-equipe.webp"
                  alt="Equipe da AOS Topografia em campo"
                  className="w-full h-[280px] sm:h-[330px] object-cover object-[50%_26%] rounded-lg"
                />
              </div>

              <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[11px] text-text-secondary">
                <span>Arnolemar Marques da Silva / Empresário</span>
                <span>Nova Santa Rita / RS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5) SEÇÃO DE SOLUÇÕES
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
          <p className="text-base text-white leading-relaxed">
            Temos as soluções completas para obras, terrenos e projetos, com precisão, agilidade e segurança.
          </p>
        </div>

        {/* Grid de 6 cards claros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Solução 01: Levantamento Planialtimétrico */}
          <div className="bg-white rounded-[12px] p-5 h-full flex flex-col items-start border-8 border-primary">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-4">
              <ClipboardList className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Levantamento Planialtimétrico
            </h3>
            <p className="text-xs text-accent leading-relaxed mb-4">
              Medições detalhadas para projetos de engenharia e arquitetura.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-3 py-1.5 rounded-md border border-black/10 text-text-primary text-[11px] font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 02: Georreferenciamento de Imóveis Rurais */}
          <div className="bg-white rounded-[12px] p-5 h-full flex flex-col items-start border-8 border-primary">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Georreferenciamento de Imóveis Rurais
            </h3>
            <p className="text-xs text-accent leading-relaxed mb-4">
              Conformidade legal e precisão na demarcação de propriedades.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-3 py-1.5 rounded-md border border-black/10 text-text-primary text-[11px] font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 03: Locação de Obras */}
          <div className="bg-white rounded-[12px] p-5 h-full flex flex-col items-start border-8 border-primary">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-4">
              <Crosshair className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Locação de Obras
            </h3>
            <p className="text-xs text-accent leading-relaxed mb-4">
              Marcação exata para execução de construções.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-3 py-1.5 rounded-md border border-black/10 text-text-primary text-[11px] font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 04: Desmembramento */}
          <div className="bg-white rounded-[12px] p-5 h-full flex flex-col items-start border-8 border-primary">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-4">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Desmembramento
            </h3>
            <p className="text-xs text-accent leading-relaxed mb-4">
              Efetuamos a divisão regularizada de áreas urbanas e rurais.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-3 py-1.5 rounded-md border border-black/10 text-text-primary text-[11px] font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 05: Usucapião */}
          <div className="bg-white rounded-[12px] p-5 h-full flex flex-col items-start border-8 border-primary">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Usucapião
            </h3>
            <p className="text-xs text-accent leading-relaxed mb-4">
              Suporte técnico para processos de regularização.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-3 py-1.5 rounded-md border border-black/10 text-text-primary text-[11px] font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>

          {/* Solução 06: Retificação */}
          <div className="bg-white rounded-[12px] p-5 h-full flex flex-col items-start border-8 border-primary">
            <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center mb-4">
              <FileCheck2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-text-primary mb-2">
              Retificação
            </h3>
            <p className="text-xs text-accent leading-relaxed mb-4">
              Correções de registros imobiliários com base em medições atualizadas.
            </p>
            <button
              type="button"
              onClick={() => onOpenModal('orcamento')}
              className="mt-auto px-3 py-1.5 rounded-md border border-black/10 text-text-primary text-[11px] font-semibold hover:bg-accent hover:border-accent hover:text-white transition-colors cursor-pointer"
            >
              Saiba Mais!
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6) SEÇÃO NOSSOS PILARES
          Mosaico de 5 fotos. Ao passar o cursor a imagem revela o pilar,
          a descrição e o botão. Em telas pequenas o texto fica sempre visível,
          porque não existe cursor para provocar o hover.
         ========================================================================= */}
      <section
        id="pilares"
        className="py-24 sm:py-32 px-6 sm:px-10 border-t border-white/[0.12]"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-white">
            Nossos Pilares
          </h2>
        </div>

        {/* Mosaico: 2 cards largos na primeira linha, 3 na segunda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {/* Pilar: Comprometimento */}
          <article
            tabIndex={0}
            onClick={(e) => e.currentTarget.focus()}
            className="group relative overflow-hidden border-8 border-primary rounded-[12px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:col-span-3 h-[240px] sm:h-[290px] lg:h-[330px]"
          >
            <img
              src={pilarComprometimento}
              alt="Topógrafo da AOS operando estação total em campo"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/70 flex flex-col justify-end p-5 sm:p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-primary mb-2">
                Comprometimento
              </h3>
              <p className="text-[13px] sm:text-sm text-text-primary leading-snug mb-4">
                Nosso maior objetivo é entregar confiança. Estamos comprometidos em superar expectativas e contribuir para que cada obra seja um sucesso.
              </p>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="self-start px-4 py-2 rounded-md bg-primary text-white text-xs font-semibold hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                Saiba Mais!
              </button>
            </div>
          </article>

          {/* Pilar: Seriedade */}
          <article
            tabIndex={0}
            onClick={(e) => e.currentTarget.focus()}
            className="group relative overflow-hidden border-8 border-primary rounded-[12px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:col-span-3 h-[240px] sm:h-[290px] lg:h-[330px]"
          >
            <img
              src={pilarSeriedade}
              alt="Dois profissionais da AOS analisando o projeto na obra"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/70 flex flex-col justify-end p-5 sm:p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-primary mb-2">
                Seriedade
              </h3>
              <p className="text-[13px] sm:text-sm text-text-primary leading-snug mb-4">
                Cada projeto é tratado com máxima responsabilidade e profissionalismo, assegurando resultados confiáveis e dentro dos prazos estabelecidos.
              </p>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="self-start px-4 py-2 rounded-md bg-primary text-white text-xs font-semibold hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                Saiba Mais!
              </button>
            </div>
          </article>

          {/* Pilar: Equipamentos */}
          <article
            tabIndex={0}
            onClick={(e) => e.currentTarget.focus()}
            className="group relative overflow-hidden border-8 border-primary rounded-[12px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:col-span-2 h-[240px] sm:h-[250px]"
          >
            <img
              src={pilarEquipamentos}
              alt="Receptores GNSS base e rover montados em campo"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/70 flex flex-col justify-end p-5 sm:p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-primary mb-2">
                Equipamentos
              </h3>
              <p className="text-[13px] sm:text-sm text-text-primary leading-snug mb-4">
                Trabalhamos com equipamentos modernos e tecnologia de ponta, garantindo precisão nas medições e agilidade em todos os processos topográficos.
              </p>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="self-start px-4 py-2 rounded-md bg-primary text-white text-xs font-semibold hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                Saiba Mais!
              </button>
            </div>
          </article>

          {/* Pilar: Equipe preparada */}
          <article
            tabIndex={0}
            onClick={(e) => e.currentTarget.focus()}
            className="group relative overflow-hidden border-8 border-primary rounded-[12px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:col-span-2 h-[240px] sm:h-[250px]"
          >
            <img
              src={pilarEquipe}
              alt="Equipe da AOS Topografia em campo"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/70 flex flex-col justify-end p-5 sm:p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-primary mb-2">
                Equipe preparada
              </h3>
              <p className="text-[13px] sm:text-sm text-text-primary leading-snug mb-4">
                Contamos com uma equipe altamente qualificada, formada por profissionais experientes e em constante atualização, prontos para atender projetos de diferentes portes e complexidades.
              </p>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="self-start px-4 py-2 rounded-md bg-primary text-white text-xs font-semibold hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                Saiba Mais!
              </button>
            </div>
          </article>

          {/* Pilar: Atenção */}
          <article
            tabIndex={0}
            onClick={(e) => e.currentTarget.focus()}
            className="group relative overflow-hidden border-8 border-primary rounded-[12px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:col-span-2 h-[240px] sm:h-[250px]"
          >
            <img
              src={pilarAtencao}
              alt="Técnico da AOS operando o coletor de dados"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/70 flex flex-col justify-end p-5 sm:p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-primary mb-2">
                Atenção
              </h3>
              <p className="text-[13px] sm:text-sm text-text-primary leading-snug mb-4">
                Valorizamos cada cliente, ouvindo suas necessidades e oferecendo soluções personalizadas, sempre com foco nos detalhes que fazem a diferença.
              </p>
              <button
                type="button"
                onClick={() => onOpenModal('orcamento')}
                className="self-start px-4 py-2 rounded-md bg-primary text-white text-xs font-semibold hover:bg-accent hover:text-white transition-colors cursor-pointer"
              >
                Saiba Mais!
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================================
          7) SEÇÃO NOSSOS PARCEIROS
          Faixa clara com os logos. Cinza por padrão; ao passar o cursor,
          cada logo volta à cor real da marca.
         ========================================================================= */}
      <section
        id="parceiros"
        className="py-12 sm:py-16 px-6 sm:px-10 border-t border-white/[0.12]"
      >
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-bold uppercase tracking-wider text-white">
            Nossos Parceiros
          </h2>
        </div>

        {/* Faixa branca: garante que todo logo apareça na cor certa,
            inclusive os mais escuros */}
        <div className="bg-white rounded-[12px] px-5 sm:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroLog}
                alt="LOG Commercial Properties"
                title="LOG Commercial Properties"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroAncora}
                alt="Âncora Engenharia"
                title="Âncora Engenharia"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroHenz}
                alt="HENZ Engenharia"
                title="HENZ Engenharia"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroTenda}
                alt="Construtora Tenda"
                title="Construtora Tenda"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroCorsan}
                alt="Corsan"
                title="Corsan"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroInnova}
                alt="Polo Films & Innova"
                title="Polo Films & Innova"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroDmae}
                alt="DMAE — Departamento Municipal de Água e Esgotos"
                title="DMAE — Departamento Municipal de Água e Esgotos"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroLyx}
                alt="LYX"
                title="LYX"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroSintra}
                alt="Sintra Pavimentação, Saneamento e Engenharia"
                title="Sintra Pavimentação, Saneamento e Engenharia"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroAbf}
                alt="ABF Developments"
                title="ABF Developments"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroAcepar}
                alt="Acepar"
                title="Acepar"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>

            <button
              type="button"
              className="group h-12 flex items-center justify-center cursor-pointer rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <img
                src={parceiroMorana}
                alt="Morana"
                title="Morana"
                className="max-h-full max-w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100"
              />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8) CONTATO / RODAPÉ
          Título: "O primeiro passo da sua obra começa aqui"
          Botões: "Falar no WhatsApp" e "Peça um formulário"
          Informações (SEM telefone):
            E-mail: aos.topografia@outlook.com
            Endereço: Rua Carlos de Souza Pereira, 59 — Nova Santa Rita / RS
          Ícones sociais: WhatsApp, Instagram, LinkedIn
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
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase tracking-wider text-white mb-6 max-w-3xl">
            O primeiro passo da sua obra começa aqui
          </h2>

          <p className="text-base sm:text-lg text-white max-w-xl mb-10 leading-relaxed">
            Fale com nossa equipe técnica, solicite seu orçamento e dê o primeiro passo para tirar seu projeto do papel.
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
            <p className="text-xs sm:text-sm text-white max-w-sm leading-relaxed">
              Topografia de excelência e georreferenciamento com soluções de alta precisão para obras residenciais, comerciais e industriais.
            </p>
          </div>

          {/* Coluna 2: Dados de Contato e Endereço */}
          <div className="md:col-span-4 flex flex-col space-y-3.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-white">
              CANAIS &amp; LOCALIZAÇÃO
            </span>

            {/* E-mail */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <span>aos.topografia@outlook.com</span>
            </div>

            {/* Endereço */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Rua Carlos de Souza Pereira, 59 — Nova Santa Rita / RS</span>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="md:col-span-3 flex flex-col">
            <span className="text-xs uppercase tracking-wider font-semibold text-white mb-3.5">
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
                <WhatsAppIcon className="w-4 h-4" />
              </button>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/aos_topografia/"
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
                href="https://www.linkedin.com/in/a-o-s-servi%C3%A7os-de-topografia-ltda-89502042a"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.15] bg-primary-light/85 backdrop-blur-sm hover:bg-accent/15 hover:border-accent hover:text-accent flex items-center justify-center text-white transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

            </div>
          </div>
        </div>

        {/* Linha final do rodapé */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-white tracking-wider uppercase font-medium">
          <span>AOS TOPOGRAFIA &copy; 2026 — TOPOGRAFIA E GEORREFERENCIAMENTO</span>
          <span className="text-[11px] text-white">
            RIO GRANDE DO SUL
          </span>
        </div>
      </footer>
    </div>
  );
};
