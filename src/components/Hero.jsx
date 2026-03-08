import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden flex items-center min-h-screen">
            {/* Halo Effect Background Elements - Light, luminous, minimal */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#10B981]/10 to-transparent blur-[100px] opacity-70" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100/40 to-transparent blur-[120px] opacity-60" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge de confianza (Efecto Halo inicial) */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-8 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-wide text-[#2D3748]/70 uppercase">Organización Inteligente</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#2D3748] tracking-tight leading-[1.1] mb-6">
                        Recupera horas de tu semana con datos <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-teal-500">impecables y automáticos</span>.
                    </h1>

                    <p className="text-xl text-[#2D3748]/70 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                        Olvídate de perder el control de tu negocio entre hojas de cálculo desordenadas. Organizo tu información y automatizo tu operación diaria para que puedas enfocarte en hacer crecer tu PyME, sin depender de procesos manuales.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* CTA Principal con Microinteracciones (Peak-End) */}
                        <a
                            href="#contacto"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-white font-medium bg-[#10B981] rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/30 active:scale-95"
                        >
                            <span className="relative z-10">Agendar mi Consulta Gratuita</span>
                            <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        </a>

                        {/* Prueba social / Reductor de fricción */}
                        <div className="flex items-center gap-2 text-sm text-[#2D3748]/60 mt-4 sm:mt-0 sm:ml-4">
                            <CheckCircle2 size={16} className="text-[#10B981]" />
                            <span>Diagnóstico inicial sin costo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
