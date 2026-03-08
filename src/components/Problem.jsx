import React from 'react';
import { AlertCircle, Clock, Database } from 'lucide-react';

export default function Problem() {
    const painPoints = [
        {
            icon: <Database className="w-8 h-8 text-rose-500" />,
            title: 'Información Dispersa',
            description: 'Tener datos de ventas, stock y clientes en lugares distintos te impide saber qué pasa realmente en tu negocio.',
        },
        {
            icon: <Clock className="w-8 h-8 text-rose-500" />,
            title: 'Dependencia Manual',
            description: 'Pasar horas cargando datos a mano te quita tiempo valioso y frena la capacidad de atención a tus clientes.',
        },
        {
            icon: <AlertCircle className="w-8 h-8 text-rose-500" />,
            title: 'Decisiones a Ciegas',
            description: 'Si los números no están actualizados, corres el riesgo de perder rentabilidad por decisiones basadas en suposiciones.',
        }
    ];

    return (
        <section id="problema" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2D3748] mb-6">
                        El trabajo manual en Excel está frenando el potencial de tu negocio.
                    </h2>
                    <p className="text-xl text-[#2D3748]/70 leading-relaxed">
                        Copiar, pegar y cruzar interminables planillas de Excel... Estas tareas rutinarias no solo agotan tu energía, sino que te desconectan de lo importante. Si la operación de tu empresa depende de archivos desactualizados y procesos lentos, estás perdiendo oportunidades de crecimiento y trabajando más horas de las necesarias.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100/50"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-rose-100/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-[#2D3748] mb-3">{point.title}</h3>
                            <p className="text-[#2D3748]/70 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
