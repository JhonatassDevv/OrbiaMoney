import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, Home, Utensils, Car, Wallet, Sparkles, Building2, Rocket, Coffee, Plane, Gamepad2, TrendingUp, CreditCard, PieChart, Lock, FileText, FolderPlus, MonitorSmartphone, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- NOTIFICAÇÕES ---
const transacoesPopups = [
  { nome: "Jhonatas", acao: "gastou", valor: "R$ 500,00", contexto: "no cartão", icone: <CreditCard className="w-5 h-5 text-blue-400" />, iniciais: "JH", corAvatar: "from-blue-600 to-indigo-900" },
  { nome: "Karollyne", acao: "investiu", valor: "R$ 350,00", contexto: "no CDB", icone: <TrendingUp className="w-5 h-5 text-emerald-400" />, iniciais: "KA", corAvatar: "from-emerald-500 to-teal-700" },
  { nome: "Joana", acao: "comprou", valor: "R$ 1.200,00", contexto: "no débito", icone: <Home className="w-5 h-5 text-pink-400" />, iniciais: "JO", corAvatar: "from-pink-600 to-rose-900" },
  { nome: "Gleicy", acao: "gastou", valor: "R$ 700,00", contexto: "na viagem", icone: <Plane className="w-5 h-5 text-amber-400" />, iniciais: "GL", corAvatar: "from-amber-600 to-orange-900" },
  { nome: "Maykon", acao: "gastou", valor: "R$ 200,00", contexto: "em Fortnite", icone: <Gamepad2 className="w-5 h-5 text-purple-400" />, iniciais: "MA", corAvatar: "from-purple-600 to-violet-900" },
  { nome: "Luana", acao: "investiu", valor: "R$ 10.000,00", contexto: "em ações", icone: <TrendingUp className="w-5 h-5 text-teal-400" />, iniciais: "LU", corAvatar: "from-teal-500 to-cyan-800" }
];

const gastosEpicos = [
  { titulo: "Burj Khalifa", valor: "R$ 5.000,00", categoria: "Arquitetura & Lazer", icone: <Building2 className="w-5 h-5 text-amber-400" />, tag: "Torre Mais Alta" },
  { titulo: "Viagem à Lua", valor: "R$ 120.000,00", categoria: "Turismo Espacial", icone: <Rocket className="w-5 h-5 text-purple-400" />, tag: "Férias em órbita" },
  { titulo: "Café Expresso", valor: "R$ 4,50", categoria: "Alimentação Básica", icone: <Coffee className="w-5 h-5 text-emerald-400" />, tag: "Combustível diário" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function App() {
  const [popupAtual, setPopupAtual] = useState(0);
  const [cartaoEpico, setCartaoEpico] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [phoneStep, setPhoneStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPopupAtual((prev) => (prev + 1) % transacoesPopups.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const intervaloEpico = setInterval(() => {
      setCartaoEpico((prev) => (prev + 1) % gastosEpicos.length);
    }, 3500);
    return () => clearInterval(intervaloEpico);
  }, []);

  useEffect(() => {
    const timers = [];
    setPhoneStep(0);
    timers.push(setTimeout(() => setPhoneStep(1), 1500));
    timers.push(setTimeout(() => setPhoneStep(2), 3500));
    timers.push(setTimeout(() => setPhoneStep(3), 5500));
    timers.push(setTimeout(() => setPhoneStep(4), 8000));
    return () => timers.forEach(clearTimeout);
  }, []);

  const popup = transacoesPopups[popupAtual];
  const epico = gastosEpicos[cartaoEpico];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans tracking-tight overflow-x-hidden selection:bg-emerald-500/30 selection:text-white">
      
      {/* HEADER */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.05]' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-2xl font-extrabold tracking-tighter text-white">Orbia</span>
            <span className="text-2xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Money</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
            <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#precos" className="hover:text-white transition-colors">Preço</a>
          </nav>
          <div className="flex items-center gap-6">
            <button className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors">Entrar</button>
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Criar minha conta
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-950/30 blur-[160px] rounded-full pointer-events-none opacity-60" />

        {/* NOTIFICAÇÕES SUPERIORES ESQUERDAS */}
        <div className="absolute top-28 left-4 md:left-10 z-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={popupAtual}
              initial={{ opacity: 0, x: -30, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.9, filter: "blur(6px)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-[#121214]/95 backdrop-blur-2xl border border-white/15 p-3.5 pr-6 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex items-center gap-4 min-w-[300px] ring-1 ring-white/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${popup.corAvatar} flex items-center justify-center border border-white/20 shadow-lg text-white font-bold`}>
                {popup.iniciais}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-sm">{popup.nome}</span>
                  <div className="p-1 rounded-md bg-white/5 border border-white/5">{popup.icone}</div>
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="font-extrabold text-sm text-emerald-400">{popup.valor}</span>
                  <span className="text-gray-400 text-[11px] font-medium">{popup.contexto}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full mt-20 lg:mt-0">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-[1.05]">
              Seu dinheiro.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Do seu jeito.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed font-light">
              Uma forma simples de registrar seus gastos, acompanhar suas receitas e entender para onde seu dinheiro está indo.
            </motion.p>
            
            <motion.div variants={fadeUp} className="pt-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Exemplos do que você pode registrar:
              </div>
              <div className="relative h-20 max-w-md overflow-hidden rounded-2xl bg-[#111111] border border-white/10 p-4 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cartaoEpico}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                        {epico.icone}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-white font-bold text-base">{epico.titulo}</p>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">{epico.tag}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">{epico.categoria}</p>
                      </div>
                    </div>
                    <span className="text-lg font-extrabold text-emerald-400 tracking-tight">{epico.valor}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2">
              <a href="#precos" className="inline-flex bg-emerald-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Começar agora — R$ 2,99/mês
              </a>
            </motion.div>
          </motion.div>

          {/* iPHONE */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center justify-center lg:justify-end relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full" />
            
            <div className="relative w-[320px] h-[670px] bg-black rounded-[3.5rem] border-[8px] border-[#18181b] shadow-[0_30px_80px_rgba(0,0,0,0.9)] ring-1 ring-[#27272a] overflow-hidden z-10">
              <div className="absolute top-0 w-full h-14 flex justify-between items-center px-7 z-50 text-white pointer-events-none">
                <span className="text-[14px] font-semibold tracking-tight mt-1">9:41</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 9.5C1 9.22386 1.22386 9 1.5 9H3.5C3.77614 9 4 9.22386 4 9.5V10.5C4 10.7761 3.77614 11 3.5 11H1.5C1.22386 11 1 10.7761 1 10.5V9.5Z" fill="white"/></svg>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 11.5C8.82843 11.5 9.5 10.8284 9.5 10C9.5 9.17157 8.82843 8.5 8 8.5C7.17157 8.5 6.5 9.17157 6.5 10C6.5 10.8284 7.17157 11.5 8 11.5Z" fill="white"/></svg>
                  <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" strokeOpacity="0.4"/><rect x="2" y="2" width="18" height="8" rx="2" fill="white"/></svg>
                </div>
              </div>

              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-full z-50 flex items-center justify-end px-3">
                <div className="w-[10px] h-[10px] rounded-full bg-[#0a0a0a]"></div>
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/90 rounded-full z-50"></div>

              <AnimatePresence mode="wait">
                {phoneStep < 4 && (
                  <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(10px)" }} transition={{ duration: 0.8 }} className="absolute inset-0 bg-[#0b0e11] flex flex-col">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800')] bg-cover"></div>
                    
                    <div className="pt-14 pb-3 px-4 bg-[#181b20] border-b border-white/5 z-10 flex items-center gap-3">
                       <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-sm shadow-md border border-white/10">J</div>
                       <div>
                         <p className="text-white font-semibold text-sm leading-tight tracking-tight">Joana</p>
                         <p className="text-emerald-400 text-[10px] font-medium">online</p>
                       </div>
                    </div>

                    <div className="p-4 pt-6 flex-1 flex flex-col gap-4 z-10">
                      <div className="text-center text-[10px] text-gray-400 mb-2 font-medium bg-[#1a1d24] border border-white/5 self-center px-3 py-1 rounded-lg">HOJE</div>
                      
                      <AnimatePresence>
                        {phoneStep >= 1 && (
                          <motion.div initial={{ opacity: 0, y: 15, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="flex flex-col items-end">
                            <span className="text-[10px] text-gray-400 mr-1 mb-0.5">Maykon</span>
                            <div className="bg-emerald-500 text-black font-medium p-3 rounded-2xl rounded-tr-sm max-w-[88%] text-sm relative shadow-sm">
                              Joana, quanto gastamos no cartão esse mês? 💵
                              <span className="absolute bottom-1 right-2 text-[9px] text-black/60">09:41</span>
                            </div>
                          </motion.div>
                        )}
                        
                        {phoneStep >= 2 && (
                          <motion.div initial={{ opacity: 0, y: 15, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="flex flex-col items-start mt-1">
                            <span className="text-[10px] text-gray-400 ml-1 mb-0.5">Joana</span>
                            <div className="bg-[#22262e] text-white p-3 rounded-2xl rounded-tl-sm max-w-[88%] text-sm relative pr-10 border border-white/5 shadow-sm">
                              Deu 750 reais 💸
                              <span className="absolute bottom-1 right-2 text-[9px] text-gray-400">09:41</span>
                            </div>
                          </motion.div>
                        )}

                        {phoneStep >= 3 && (
                          <motion.div initial={{ opacity: 0, y: 15, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="flex flex-col items-end mt-1">
                            <span className="text-[10px] text-gray-400 mr-1 mb-0.5">Maykon</span>
                            <div className="bg-emerald-500 text-black font-medium p-3 rounded-2xl rounded-tr-sm max-w-[88%] text-sm relative pr-10 shadow-sm">
                              Não esquece de registrar no Orbia!
                              <span className="absolute bottom-1 right-2 text-[9px] text-black/60">09:42</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}

                {phoneStep >= 4 && (
                  <motion.div key="dashboard" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-0 bg-[#0A0A0A] flex flex-col">
                    <div className="pt-20 pb-8 px-6 bg-[#0A0A0A] text-center">
                      <div className="w-12 h-12 rounded-[14px] bg-emerald-900/30 mx-auto flex items-center justify-center mb-4 border border-emerald-500/20">
                        <Wallet className="w-6 h-6 text-emerald-400" />
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Olá, Jhonatas</p>
                      <h2 className="text-[40px] font-extrabold text-white tracking-tighter leading-none">R$ 4.280,50</h2>
                    </div>
                    
                    <div className="px-5 space-y-5 flex-1 bg-[#0A0A0A] overflow-y-auto pb-12">
                      <div className="flex items-center gap-3">
                        <div className="px-5 py-2.5 rounded-full border border-white/10 text-[13px] font-medium text-white bg-white/5">Gastos no cartão</div>
                        <div className="px-5 py-2.5 rounded-full border border-white/5 text-[13px] font-medium text-gray-400 bg-transparent">Receitas</div>
                      </div>

                      <div className="pt-2">
                        <h3 className="text-[11px] font-semibold text-gray-500 mb-3 uppercase tracking-widest">Últimas transações</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3.5 rounded-[1.25rem] bg-[#111111] border border-white/5">
                            <div className="flex items-center gap-3.5">
                              <div className="w-11 h-11 rounded-full bg-[#EA1D2C] flex items-center justify-center">
                                <span className="text-white font-bold text-xs italic tracking-tighter">ifood</span>
                              </div>
                              <div>
                                <p className="text-[15px] font-semibold text-white tracking-tight">Delivery de comida</p>
                                <p className="text-[11px] text-gray-500 font-medium mt-0.5">Alimentação • 28 de Jun</p>
                              </div>
                            </div>
                            <span className="text-[15px] font-bold text-white tracking-tight">R$ 42,90</span>
                          </div>

                          <div className="flex items-center justify-between p-3.5 rounded-[1.25rem] bg-[#111111] border border-white/5">
                            <div className="flex items-center gap-3.5">
                              <div className="w-11 h-11 rounded-full bg-[#FF385C] flex items-center justify-center">
                                <Home className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="text-[15px] font-semibold text-white tracking-tight">Hospedagem</p>
                                <p className="text-[11px] text-gray-500 font-medium mt-0.5">Viagens • 24 de Jun</p>
                              </div>
                            </div>
                            <span className="text-[15px] font-bold text-white tracking-tight">R$ 120,00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SEÇÃO 1: SURPRESAS NA FATURA? */}
      <section className="py-32 px-6 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-[480px] flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" 
              alt="Ilustração estilo cartoon" 
              className="w-full h-full object-cover rounded-[2.5rem] opacity-60 border border-white/10 shadow-2xl" 
            />
            <motion.div 
              initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="absolute right-4 md:-right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3.5"
            >
              <div className="bg-[#111111]/95 backdrop-blur-md border border-white/15 p-3.5 pr-6 rounded-2xl flex items-center gap-4 shadow-2xl w-72">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center"><span className="text-white font-bold text-xs italic tracking-tighter">ifood</span></div>
                <div className="flex-1"><p className="text-sm font-semibold text-white">Delivery de comida</p><p className="text-[10px] text-gray-400">Alimentação • 28 de Jun</p></div>
                <span className="text-sm font-bold text-white">R$ 42,00</span>
              </div>

              <div className="bg-[#111111]/95 backdrop-blur-md border border-white/15 p-3.5 pr-6 rounded-2xl flex items-center gap-4 shadow-2xl w-72">
                <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center"><Home className="w-4 h-4 text-white" /></div>
                <div className="flex-1"><p className="text-sm font-semibold text-white">Hospedagem</p><p className="text-[10px] text-gray-400">Viagens • 24 de Jun</p></div>
                <span className="text-sm font-bold text-white">R$ 120,00</span>
              </div>

              <div className="bg-[#111111]/95 backdrop-blur-md border border-white/15 p-3.5 pr-6 rounded-2xl flex items-center gap-4 shadow-2xl w-72">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"><span className="text-white font-bold text-[10px] uppercase">Uber</span></div>
                <div className="flex-1"><p className="text-sm font-semibold text-white">Corrida</p><p className="text-[10px] text-gray-400">Parcela 1/4 • 28 de Jun</p></div>
                <span className="text-sm font-bold text-white">R$ 25,00</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-6">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              Surpresas na fatura?<br/><span className="text-gray-500">Não comigo.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed font-light">
              Eu organizo cada gasto que você registra manualmente, identifico cobranças e mantenho tudo sob controle para você nunca ser pego de surpresa no fim do mês. Sem automações perigosas, apenas o seu controle consciente.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* 3. SEÇÃO 2: VEJA PRA ONDE SEU DINHEIRO TÁ INDO */}
      <section className="py-32 px-6 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-6 order-2 lg:order-1">
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              Veja pra onde seu<br/><span className="text-gray-500">dinheiro tá indo</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed font-light">
              Acompanhe seus lançamentos manuais por categorias, encontre os maiores ralos financeiros e descubra onde dá pra economizar. Tudo claro e direto.
            </motion.p>
          </motion.div>

          <div className="relative h-[480px] flex items-center justify-center order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800" 
              alt="Ilustração gráfico" 
              className="w-full h-full object-cover rounded-[2.5rem] opacity-60 border border-white/10 shadow-2xl" 
            />
            
            <motion.div 
              initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="absolute left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-[#111111]/95 backdrop-blur-xl border border-white/15 p-6 rounded-[2rem] shadow-2xl w-80"
            >
              <p className="text-xs text-gray-400 mb-2 font-medium">Gastos por categoria • Este mês</p>
              <h3 className="text-3xl font-extrabold text-white mb-5 tracking-tight">R$ 2.450,00</h3>
              
              <div className="flex h-3 rounded-full overflow-hidden mb-6 gap-1">
                <div className="w-[45%] bg-pink-500 rounded-l-full"></div>
                <div className="w-[35%] bg-indigo-500"></div>
                <div className="w-[20%] bg-amber-500 rounded-r-full"></div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center"><span className="text-gray-300">Alimentação (45%)</span><span className="font-bold text-white">R$ 1.102</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-300">Moradia (35%)</span><span className="font-bold text-white">R$ 857</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-300">Lazer (20%)</span><span className="font-bold text-white">R$ 490</span></div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="py-32 px-6 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Recursos Feitos para Você</h2>
            <p className="text-gray-400 font-light">Ferramentas robustas com foco total em privacidade e praticidade manual.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Segurança 24H</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">Nossa equipe quanto terceiros não possuem acesso a seus dados financeiros. Uma forma totalmente segura de anotar os gastos sem se preocupar.</p>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Relatórios Claros</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">Resumos incríveis com gráficos simples e completos para você entender sua evolução mês após mês.</p>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                  <FolderPlus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Criação de Categorias</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">Crie suas próprias categorias e rótulos de acordo com a sua necessidade e estilo de vida.</p>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 text-teal-400">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Multiplataforma</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">Acesse seu controle financeiro de onde estiver, com total sincronia e fluidez no celular ou computador.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (COM O ID CORRETO E 3 PASSOS VISUAIS) */}
      <section id="como-funciona" className="py-32 px-6 bg-black border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Simples de usar, poderoso nos resultados</h2>
            <p className="text-gray-400 font-light">Três etapas para transformar sua relação com o dinheiro.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative rounded-[2.5rem] bg-[#111111] border border-white/10 p-8 overflow-hidden">
              <span className="text-6xl font-extrabold text-white/5 absolute top-4 right-6">01</span>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Registre</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Adicione suas receitas e despesas manualmente com total facilidade no seu dia a dia.</p>
            </div>

            <div className="relative rounded-[2.5rem] bg-[#111111] border border-white/10 p-8 overflow-hidden">
              <span className="text-6xl font-extrabold text-white/5 absolute top-4 right-6">02</span>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Organize</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Escolha suas categorias customizadas e acompanhe para onde cada centavo está indo.</p>
            </div>

            <div className="relative rounded-[2.5rem] bg-[#111111] border border-white/10 p-8 overflow-hidden">
              <span className="text-6xl font-extrabold text-white/5 absolute top-4 right-6">03</span>
              <h3 className="text-xl font-bold text-white mb-3 mt-4">Entenda</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Visualize gráficos limpos e tome decisões conscientes para o seu futuro financeiro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PREÇO PREMIUM */}
      <section id="precos" className="py-32 px-6 bg-black border-t border-white/[0.05] relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold text-gray-300 mb-16 tracking-tight">
            Quanto custa ter tudo isso?
          </motion.h2>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className="mb-4">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl text-gray-500 font-medium">R$</span>
              <span className="text-8xl md:text-[120px] font-extrabold text-white tracking-tighter leading-none">2,99</span>
              <span className="text-gray-500 text-xl font-medium">/mês</span>
            </div>
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="text-xl text-gray-400 mb-16 font-light">
            valor menor que o copo de um café expresso
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="bg-[#111111] border border-white/[0.08] rounded-[2.5rem] p-10 md:p-14 max-w-lg mx-auto shadow-2xl hover:border-white/[0.15] transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white mb-10 tracking-tight">Plano Completo</h3>
            
            <ul className="space-y-5 text-left mb-12">
              {[
                'Registro manual de receitas e despesas',
                'Categorias personalizadas e Gráficos',
                'Criação de Metas Financeiras',
                'Histórico completo',
                'Segurança dos seus dados',
                'Suporte 7 dias por semana'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" /> <span className="font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-emerald-500 text-black py-4 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              Quero organizar minha vida
            </button>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUE PARA CONTATO COM O CEO */}
      <section className="py-24 px-6 bg-black border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-950/40 via-[#111111] to-[#111111] border border-emerald-500/20 p-10 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto md:mx-0">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Tem alguma dúvida ou sugestão?</h3>
              <p className="text-gray-400 font-light text-sm max-w-md">Fale diretamente com o nosso criador. Envie uma mensagem para o CEO e respondemos rapidinho.</p>
            </div>
            <a 
              href="mailto:jhonatasdev@proton.me" 
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-base hover:bg-emerald-400 transition-colors inline-flex items-center gap-3 shrink-0 shadow-lg"
            >
              Enviar DM para o CEO <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* FOOTER COM SEDE EM TERESINA, PIAUÍ */}
      <footer className="border-t border-white/[0.05] bg-[#0A0A0A] pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16 items-start">
          <div>
            <div className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-extrabold tracking-tighter text-white">Orbia</span>
              <span className="text-2xl font-light tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Money</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-6 leading-relaxed font-light">Seu dinheiro organizado.<br/>Sua vida mais leve.</p>
            <p className="text-xs text-emerald-400 font-medium tracking-wide">📍 Sede em Teresina, Piauí</p>
          </div>

          <div className="space-y-3 text-sm text-gray-400">
            <h4 className="text-white font-bold">Navegação</h4>
            <p><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></p>
            <p><a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a></p>
            <p><a href="#precos" className="hover:text-white transition-colors">Preço</a></p>
          </div>

          <div className="space-y-3 text-sm text-gray-400">
            <h4 className="text-white font-bold">Contato Direto</h4>
            <p><a href="mailto:jhonatasdev@proton.me" className="text-emerald-400 hover:underline">jhonatasdev@proton.me</a></p>
            <p className="text-xs text-gray-500 pt-2">Suporte e Dúvidas com o CEO</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-sm text-gray-600 font-light">
          © {new Date().getFullYear()} OrbiaMoney. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}