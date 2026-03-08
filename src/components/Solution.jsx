import React from 'react';
import { Sparkles, Layers } from 'lucide-react';

export default function Solution() {
    return (
        <section id="solucion" className="py-16 md:py-20 bg-[#F7F9FC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-6">
                        Soluciones simples para <br className="hidden md:block" />
                        problemas complejos. <span className="text-[#10B981]">Cero estrés técnico.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {/* Servicio 1: Orden y Limpieza */}
                    <div className="relative p-10 bg-white rounded-3xl shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Layers size={120} />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mb-8">
                                <Layers className="text-[#10B981] w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">
                                Limpieza y Organización de Datos
                            </h3>
                            <p className="text-[#2D3748]/70 text-lg leading-relaxed mb-6">
                                Tomo tus registros dispersos, elimino duplicados, estandarizo formatos y corrijo errores. El resultado es una única fuente de verdad: datos 100% limpios y confiables en los que tu equipo puede confiar a ciegas.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-[#2D3748]/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                                    Unificación de formatos
                                </li>
                                <li className="flex items-center gap-3 text-[#2D3748]/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                                    Eliminación de duplicados
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Servicio 2: Automatización */}
                    <div className="relative p-10 bg-white rounded-3xl shadow-sm border border-gray-100 group transition-all duration-300 hover:shadow-xl hover:shadow-[#10B981]/10 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Sparkles size={120} />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mb-8">
                                <Sparkles className="text-[#10B981] w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">
                                Automatización de Flujos (Procesos ETL)
                            </h3>
                            <p className="text-[#2D3748]/70 text-lg leading-relaxed mb-6">
                                Conecto tus herramientas. Extraigo la información de donde esté, la transformo según las reglas de tu negocio y la cargo automáticamente donde la necesitas. Todo funciona en segundo plano, sin intervención manual.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-[#2D3748]/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                                    Reportes autogenerados
                                </li>
                                <li className="flex items-center gap-3 text-[#2D3748]/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                                    Delegación de procesos rutinarios
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
