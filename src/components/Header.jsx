import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Microinteracción: Cambio sutil de sombra y fondo al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                {/* Logo minimalista */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src="/Logo.jpg" alt="Logo de Capano Andrés" className="w-10 h-10 object-contain rounded-lg" />
                    <div className="flex flex-col">
                        <span className="text-[#2D3748] font-bold text-lg tracking-tight leading-none">
                            Capano Andrés
                        </span>
                        <span className="text-[#10B981] font-medium text-xs mt-1">
                            Limpieza de Datos y Automatización (Extracción, Transformación y Carga)
                        </span>
                    </div>
                </div>

                {/* Navegación Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#solucion" className="text-[#2D3748]/80 hover:text-[#10B981] font-medium transition-colors">Servicios</a>
                    <a href="#beneficios" className="text-[#2D3748]/80 hover:text-[#10B981] font-medium transition-colors">Beneficios</a>
                    <a
                        href="#contacto"
                        className="text-sm px-5 py-2.5 rounded-full font-medium text-[#10B981] border border-[#10B981]/30 hover:bg-[#10B981]/10 transition-colors shadow-sm"
                    >
                        Agendar Consulta
                    </a>
                </nav>

                {/* Menú Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-[#2D3748]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Navegación Mobile */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 py-4 flex flex-col gap-4">
                    <a
                        href="#solucion"
                        className="text-[#2D3748] font-medium p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Servicios
                    </a>
                    <a
                        href="#beneficios"
                        className="text-[#2D3748] font-medium p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Beneficios
                    </a>
                    <a
                        href="#contacto"
                        className="text-center mt-2 px-5 py-3 rounded-xl font-medium text-white bg-[#10B981] hover:bg-[#0ea5e9] transition-colors shadow-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Agendar Consulta
                    </a>
                </div>
            </div>
        </header>
    );
}
