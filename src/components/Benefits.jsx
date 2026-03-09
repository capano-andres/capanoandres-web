import React from 'react';
import { TrendingUp, ShieldCheck, Target } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            icon: <TrendingUp className="w-10 h-10 text-emerald-500" />,
            title: 'Ahorro drástico de tiempo',
            description: 'Convierte días completos de trabajo administrativo monótono en minutos. Tu equipo podrá enfocarse en tareas de verdadero valor estratégico.',
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
            title: 'Cero errores humanos',
            description: 'Toma decisiones basadas en datos 100% confiables y precisos. Elimina los descuidos provocados por el cansancio y el trabajo repetitivo.',
        },
        {
            icon: <Target className="w-10 h-10 text-emerald-500" />,
            title: 'Control estratégico total',
            description: 'Procesos transparentes y sin sobresaltos. Obtén la visibilidad y previsibilidad que necesitas para dirigir tu negocio con confianza.',
        }
    ];

    return (
        <section id="beneficios" className="py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Elemento de diseño de fondo */}
            <div className="absolute top-1/2 -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#10B981]/5 to-transparent blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-16 md:text-center mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-6">
                        El impacto real de tener tu <br className="hidden md:block" />
                        información <span className="text-[#10B981]">bajo control.</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-12 max-w-4xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse text-left md:text-right' : ''
                                }`}
                        >
                            <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center transform transition-transform hover:scale-110 hover:rotate-3 shadow-sm">
                                {benefit.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-[#2D3748] mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-lg text-[#2D3748]/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
