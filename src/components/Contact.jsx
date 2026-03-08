import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        painPoint: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

            if (!accessKey) {
                throw new Error("API Key de Web3Forms no configurada.");
            }

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.painPoint,
                    subject: "¡Nuevo lead desde tu Landing Page!", // Asunto del correo
                    from_name: "Sitio Web - Capano Andrés",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', painPoint: '' });
            } else {
                alert("Lo sentimos, hubo un problema al enviar el mensaje. Intenta de nuevo.");
            }
        } catch (error) {
            console.error("Error al enviar el formulario", error);
            alert("Hubo un error de conexión.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="py-16 md:py-20 bg-[#2D3748] text-white relative overflow-hidden">
            {/* Gradientes decorativos para darle elegancia a la sección oscura */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#10B981]/20 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-60" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
                            <span className="text-xs font-semibold tracking-wide text-white/90 uppercase">Consultoría sin costo</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Da el primer paso hacia la tranquilidad operativa.
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-10">
                            Cuéntame tu mayor dolor de cabeza con los datos y diseñaré un plan a medida para resolverlo. Sin compromisos, solo soluciones claras.
                        </p>

                        <div className="flex items-center gap-4 text-white/60 mb-8">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <span className="text-xl">✨</span>
                            </div>
                            <div>
                                <p className="font-medium text-white/90">Respuesta ágil</p>
                                <p className="text-sm text-white/60">Me pondré en contacto en menos de 24 hs hábiles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative">
                        <h3 className="text-2xl font-bold text-[#2D3748] mb-8">Solicitar mi Propuesta Gratuita</h3>

                        {isSuccess ? (
                            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl flex flex-col items-center text-center animate-fade-in-up">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="font-bold text-xl mb-2">¡Solicitud Enviada!</h4>
                                <p className="text-emerald-700/80">He recibido tu información. Muy pronto me pondré en contacto contigo para coordinar la consulta.</p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-6 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    Enviar otra solicitud
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#2D3748]/70 mb-2">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981] transition-colors"
                                        placeholder="Ej. Juan Pérez"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#2D3748]/70 mb-2">
                                        Correo profesional
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981] transition-colors"
                                        placeholder="juan@empresa.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="painPoint" className="block text-sm font-medium text-[#2D3748]/70 mb-2">
                                        ¿Qué proceso manual te quita más tiempo hoy?
                                    </label>
                                    <textarea
                                        id="painPoint"
                                        required
                                        rows="3"
                                        value={formData.painPoint}
                                        onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#2D3748] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#10B981]/50 focus:border-[#10B981] transition-colors resize-none"
                                        placeholder="Paso horas todos los meses cruzando datos de varias hojas de Excel para armar un solo reporte..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#10B981] text-white font-medium hover:bg-emerald-600 hover:shadow-lg hover:shadow-[#10B981]/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Solicitar Propuesta Gratuita'}
                                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
