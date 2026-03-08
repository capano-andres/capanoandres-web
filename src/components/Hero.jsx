import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden flex flex-col justify-center min-h-[100svh] pt-[12vh] pb-[4vh]">
            {/* Background Elements - Decoración premium */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#10B981]/10 to-transparent blur-[100px] opacity-70" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100/40 to-transparent blur-[120px] opacity-60" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white border border-gray-200 text-[10px] lg:text-xs font-medium text-gray-500 tracking-wide uppercase mb-[3vh] lg:mb-[4vh] shadow-sm">
                        <span className="flex h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-[#10B981] animate-pulse"></span>
                        <span className="text-[10px] lg:text-xs font-semibold tracking-wide text-[#2D3748]/70 uppercase">Organización Inteligente</span>
                    </div>

                    <h1 className="text-[min(10vw,2.25rem)] sm:text-[min(8vw,3rem)] md:text-[min(7vw,4rem)] lg:text-[min(6vw,4.5rem)] font-extrabold text-[#2D3748] tracking-tight mb-[2vh] lg:mb-[3vh] leading-[1.1]">
                        Recupera horas de tu <br className="hidden md:block" />
                        semana con datos <br className="hidden md:block" />
                        <span className="text-[#10B981]">impecables y automáticos</span>.
                    </h1>

                    <p className="text-[min(4vw,0.875rem)] sm:text-[min(3vw,1rem)] md:text-[min(2.5vw,1.125rem)] text-gray-600 mb-[4vh] lg:mb-[5vh] max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
                        Olvídate de perder el control de tu negocio entre hojas de cálculo desordenadas. Organizo tu información y automatizo tu operación diaria para que puedas enfocarte en hacer crecer tu PyME, sin depender de procesos manuales.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[2vh]">
                        {/* CTA Principal con Microinteracciones (Peak-End) */}
                        <a
                            href="#contacto"
                            className="group relative inline-flex items-center justify-center gap-2 px-[min(6vw,2rem)] py-[min(3vh,1rem)] w-full sm:w-auto text-white text-[min(4vw,0.875rem)] sm:text-[min(3vw,1rem)] font-medium bg-[#10B981] rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/30 active:scale-95"
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
