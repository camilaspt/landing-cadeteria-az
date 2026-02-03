import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#9AFF4F]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AZ Cadetería Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-[#9AFF4F]">AZ Cadetería</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#servicios" className="hover:text-[#9AFF4F] transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-[#9AFF4F] transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-[#9AFF4F] transition-colors">Contacto</a>
          </div>
          {/* <a
            href="#contacto"
            className="bg-[#9AFF4F] text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#7acc3d] transition-colors"
          >
            Cotizar
          </a> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9AFF4F]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9AFF4F]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="fade-in-up delay-1">
            <Image
              src="/logo.png"
              alt="AZ Cadetería"
              width={200}
              height={200}
              className="mx-auto my-4 drop-shadow-2xl"
              priority
            />
          </div>
          
          <h1 className="fade-in-up delay-2 text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Tu envío,{" "}
            <span className="text-[#9AFF4F] glow-text">nuestra prioridad</span>
          </h1>
          
          <p className="fade-in-up delay-3 text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Servicio de cadetería con entregas rápidas, seguras y confiables. 
            De la <span className="text-[#9AFF4F] font-semibold">A</span> a la <span className="text-[#9AFF4F] font-semibold">Z</span>.
          </p>
          
          <div className="fade-in-up delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="bg-[#9AFF4F] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7acc3d] transition-all pulse-button w-full sm:w-auto text-center"
            >
              Solicitar Servicio
            </a>
            <a
              href="#servicios"
              className="border-2 border-[#9AFF4F]/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-[#9AFF4F] hover:bg-[#9AFF4F]/10 transition-all w-full sm:w-auto text-center"
            >
              Ver Servicios
            </a>
          </div>
        </div>

      {/* Scroll indicator
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up delay-6">
        <div className="w-6 h-10 border-2 border-[#9AFF4F]/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#9AFF4F] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div> */}
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros <span className="text-[#9AFF4F]">Servicios</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluciones de mensajería adaptadas a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#111111] border border-[#9AFF4F]/20 rounded-2xl p-8 hover:border-[#9AFF4F]/50 transition-all group glow-border">
              <div className="w-16 h-16 bg-[#9AFF4F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9AFF4F]/20 transition-colors">
                <svg className="w-8 h-8 text-[#9AFF4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Entregas Express</h3>
              <p className="text-gray-400 leading-relaxed">
                Entregas urgentes en el menor tiempo posible. Ideal para documentos y paquetes que no pueden esperar.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#111111] border border-[#9AFF4F]/20 rounded-2xl p-8 hover:border-[#9AFF4F]/50 transition-all group glow-border">
              <div className="w-16 h-16 bg-[#9AFF4F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9AFF4F]/20 transition-colors">
                <svg className="w-8 h-8 text-[#9AFF4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Envíos Seguros</h3>
              <p className="text-gray-400 leading-relaxed">
                Manipulación cuidadosa de tus paquetes con garantía de entrega.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#111111] border border-[#9AFF4F]/20 rounded-2xl p-8 hover:border-[#9AFF4F]/50 transition-all group glow-border">
              <div className="w-16 h-16 bg-[#9AFF4F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#9AFF4F]/20 transition-colors">
                <svg className="w-8 h-8 text-[#9AFF4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Servicios Programados</h3>
              <p className="text-gray-400 leading-relaxed">
                Programa tus envíos con anticipación. Ideal para empresas con necesidades recurrentes de mensajería.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Por qué elegir{" "}
                <span className="text-[#9AFF4F]">AZ Cadetería</span>?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Somos un servicio de cadetería comprometido con la excelencia. 
                Cada entrega es una promesa cumplida, cada paquete una responsabilidad que asumimos con profesionalismo.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#9AFF4F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Puntualidad Garantizada</h4>
                    <p className="text-gray-400">Respetamos los tiempos acordados porque sabemos que tu tiempo vale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#9AFF4F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Atención Personalizada</h4>
                    <p className="text-gray-400">Cada cliente es único, adaptamos nuestro servicio a tus necesidades.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#9AFF4F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Precios Competitivos</h4>
                    <p className="text-gray-400">Tarifas sin sorpresas. Calidad de servicio al mejor precio.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#9AFF4F]/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-[#111111] border border-[#9AFF4F]/30 rounded-3xl p-12 text-center">
                <Image
                  src="/logo.png"
                  alt="AZ Cadetería"
                  width={180}
                  height={180}
                  className="mx-auto mb-8"
                />
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-[#9AFF4F] mb-2">100%</div>
                    <div className="text-gray-400 text-sm">Compromiso</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#9AFF4F] mb-2">24/7</div>
                    <div className="text-gray-400 text-sm">Disponibilidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#9AFF4F]">Contactanos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Estamos listos para ayudarte. Escribinos y te responderemos a la brevedad.
            </p>
          </div>

          <div className="bg-[#111111] border border-[#9AFF4F]/20 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#9AFF4F]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#9AFF4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Teléfono</p>
                    <p className="font-semibold text-lg">+54 9 3400 65-7887</p>
                  </div>
                </div> */}

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#9AFF4F]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#9AFF4F]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="font-semibold text-lg">+54 93400 65-7887</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#9AFF4F]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#9AFF4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="font-semibold text-base md:text-lg break-all">contacto@azcadeteria.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#9AFF4F]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#9AFF4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Ubicación</p>
                    <p className="font-semibold text-lg">Rosario, Santa Fe, Argentina</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="flex flex-col items-center text-center w-full max-w-sm mx-auto gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#25D366] rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-14 sm:h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold">¿Necesitas un envío?</h4>
                <p className="text-gray-400 text-base sm:text-lg px-2">Escribinos por WhatsApp y coordinamos tu entrega al instante</p>
                <a
                  href="https://wa.me/543400657887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-colors flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-[#9AFF4F]/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="AZ Cadetería"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-[#9AFF4F]">AZ Cadetería</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AZ Cadetería. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
