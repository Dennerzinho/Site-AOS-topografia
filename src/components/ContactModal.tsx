import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Calendar, FileText } from 'lucide-react';

export type ModalType = 'orcamento' | 'reuniao' | 'formulario' | null;

interface ContactModalProps {
  type: ModalType;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ type, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [segment, setSegment] = useState('Residencial');
  const [city, setCity] = useState('Nova Santa Rita / RS');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!type) return null;

  const getTitle = () => {
    switch (type) {
      case 'reuniao':
        return 'Agendar Reunião Técnica';
      case 'orcamento':
        return 'Solicitar Orçamento Topográfico';
      case 'formulario':
      default:
        return 'Formulário de Atendimento';
    }
  };

  const getSubtitle = () => {
    switch (type) {
      case 'reuniao':
        return 'Escolha os detalhes e nossos engenheiros agrimensores alinharão a data.';
      case 'orcamento':
        return 'Descreva a área e objetivo da sua obra para receber uma proposta precisa.';
      case 'formulario':
      default:
        return 'Preencha seus dados para receber o contato técnico da nossa equipe.';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá! Gostaria de atendimento para topografia e georreferenciamento com a AOS Topografia. (Tipo: ${type || 'Orçamento'})`
    );
    // WhatsApp direct link sem expor número como texto impresso na tela
    window.open(`https://api.whatsapp.com/send?phone=5551999999999&text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/20 rounded-[12px] p-6 sm:p-8 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-white/80 mb-3 uppercase tracking-wider">
                {type === 'reuniao' && <Calendar className="w-3.5 h-3.5" />}
                {type === 'orcamento' && <MessageSquare className="w-3.5 h-3.5" />}
                {type === 'formulario' && <FileText className="w-3.5 h-3.5" />}
                <span>AOS Topografia</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                {getTitle()}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1.5 leading-relaxed">
                {getSubtitle()}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-1.5">
                  Seu Nome / Empresa
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João da Silva / Construtora RS"
                  className="w-full bg-[#121212] border border-white/15 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-[#121212] border border-white/15 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-1.5">
                    Segmento
                  </label>
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full bg-[#121212] border border-white/15 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Residencial">01. Residencial</option>
                    <option value="Comercial">02. Comercial</option>
                    <option value="Industrial">03. Industrial</option>
                    <option value="Outro">04. Georreferenciamento / Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-1.5">
                  Município da Obra / Local
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: Nova Santa Rita / RS, Canoas, Porto Alegre..."
                  className="w-full bg-[#121212] border border-white/15 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 uppercase tracking-wider mb-1.5">
                  Detalhes do Projeto / Necessidade
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva brevemente o levantamento planialtimétrico, demarcação, loteamento ou medição..."
                  className="w-full bg-[#121212] border border-white/15 focus:border-white rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Solicitação</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="px-5 py-3 rounded-full border border-white/30 hover:border-white bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Falar no WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border border-white/30 bg-white/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-heading font-bold text-white mb-2">
              Solicitação Registrada!
            </h4>
            <p className="text-sm text-white/70 max-w-sm mb-6 leading-relaxed">
              Obrigado, <strong className="text-white">{name}</strong>. Nossa equipe técnica da AOS Topografia responderá em breve através do e-mail informado.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-all"
              >
                Concluir
              </button>
              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="px-5 py-2.5 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-wider transition-all"
              >
                Abrir WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
