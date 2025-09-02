import { Facebook, Instagram, Twitch, Youtube } from "lucide-react";

export const InfoPage = () => {
    return (
        <div className="max-w-4xl mx-auto min-h-dvh p-4">
            <header className="text-white">
                
                <img src="/images/info-laura.jpg" alt="Logo de laurasacnhez" 
                className="w-full object-cover h-[400px] sm:h-full mask-radial-at-center mask-radial-from-60% mask-b-from-80% mask-t-from-80% mask-l-from-80% mask-r-from-90%"/>

                <header className="flex flex-col justify-center items-center gap-1 mb-8 -mt-6">

                    <span className="flex gap-2 items-center text-xl font-bold text-sky-400 shadow-sm font-mono px-3 
                        py-1 border border-sky-500/50 rounded-full bg-black/65 cursor-crosshair z-10">
                        #laurasanchezcoach
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 256 256" xmlSpace="preserve" style={{ overflow: 'visible' }}>
                            <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                <path d="M 49.66 1.125 L 49.66 1.125 c 4.67 -2.393 10.394 -0.859 13.243 3.548 l 0 0 c 1.784 2.761 4.788 4.495 8.071 4.66 l 0 0 c 5.241 0.263 9.431 4.453 9.694 9.694 v 0 c 0.165 3.283 1.899 6.286 4.66 8.071 l 0 0 c 4.407 2.848 5.941 8.572 3.548 13.242 l 0 0 c -1.499 2.926 -1.499 6.394 0 9.319 l 0 0 c 2.393 4.67 0.859 10.394 -3.548 13.242 l 0 0 c -2.761 1.784 -4.495 4.788 -4.66 8.071 v 0 c -0.263 5.241 -4.453 9.431 -9.694 9.694 h 0 c -3.283 0.165 -6.286 1.899 -8.071 4.66 l 0 0 c -2.848 4.407 -8.572 5.941 -13.242 3.548 l 0 0 c -2.926 -1.499 -6.394 -1.499 -9.319 0 l 0 0 c -4.67 2.393 -10.394 0.859 -13.242 -3.548 l 0 0 c -1.784 -2.761 -4.788 -4.495 -8.071 -4.66 h 0 c -5.241 -0.263 -9.431 -4.453 -9.694 -9.694 l 0 0 c -0.165 -3.283 -1.899 -6.286 -4.66 -8.071 l 0 0 C 0.266 60.054 -1.267 54.33 1.125 49.66 l 0 0 c 1.499 -2.926 1.499 -6.394 0 -9.319 l 0 0 c -2.393 -4.67 -0.859 -10.394 3.548 -13.242 l 0 0 c 2.761 -1.784 4.495 -4.788 4.66 -8.071 l 0 0 c 0.263 -5.241 4.453 -9.431 9.694 -9.694 l 0 0 c 3.283 -0.165 6.286 -1.899 8.071 -4.66 l 0 0 c 2.848 -4.407 8.572 -5.941 13.242 -3.548 l 0 0 C 43.266 2.624 46.734 2.624 49.66 1.125 z" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,131,249)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
                                <polygon points="36.94,66.3 36.94,66.3 36.94,46.9 36.94,46.9 62.8,35.34 72.5,45.04 " style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,119,227)', fillRule: 'nonzero', opacity: 1 }} transform="  matrix(1 0 0 1 0 0) "/>
                                <polygon points="36.94,66.3 17.5,46.87 27.2,37.16 36.94,46.9 60.11,23.7 69.81,33.39 " style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }} transform="  matrix(1 0 0 1 0 0) "/>
                            </g>
                        </svg>
                    </span>

                    {/* <h1 className="text-3xl font-bold">
                        Laura Sánchez Coach
                    </h1> */}
                    <p className="text-center text-gray-300 mt-4 text-sm px-3 text-balance font-semibold">
                        Coach y personal trainer apasionada por la salud y el desarrollo personal. Aquí encontrarás enlaces a mis redes sociales y cursos.
                    </p>
                </header>

                <section className="flex gap-2 justify-center">
                    

                    {/* <!-- Instagram --> */}
                    <a href="https://www.instagram.com/laura_csg_10" target="_blank"
                        className="social-buttons bg-gradient-to-tr from-yellow-300 via-pink-600 to-purple-600 "
                        aria-label="Instagram" title="Ir a Instagram de @laurasacnhez">
                        <Instagram size={32} className=" text-amber-50"/>
                    </a>
                    
                    {/* <!-- YouTube --> */}
                    <a href="https://m.youtube.com/@laurasanchez-ft7wm" target="_blank"
                        className="bg-white social-buttons"
                        aria-label="YouTube" title="Ir a YouTube de laura sanchez">
                        <Youtube size={32} className="text-red-600" />
                    </a>
                    
                    {/* <!--Tik tok (Twitter) --> */}
                    <a href="https://www.tiktok.com/@laurasanchezgon1" target="_blank"
                        className="bg-black social-buttons"
                        aria-label="tiktok" title="Ir a tiktok de laura sanchez">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-brand-tiktok"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" /></svg>
                    </a>
        
                    {/* <!-- Facebook --> */}
                    <a href="https://www.facebook.com/share/1B7sp3v2ZG/?mibextid=wwXIfr" target="_blank"
                        className="bg-white social-buttons"
                        aria-label="LinkedIn" title="Ir a LinkedIn de laura sanchez">
                        <Facebook size={32} className="text-sky-600" />
                    </a>

                    <a href="https://twitch.tv/laurasachezcoach" target="none"
                        className="bg-purple-100 social-buttons "
                        aria-label="Twitch" title="Ir a Twitch de laura sanchez">
                        <Twitch size={32} className="text-purple-600"/>
                    </a>

                    {/* <a href="https://twitch.tv/laurasacnhez" target="_blank"
                        className="bg-purple-100 social-buttons "
                        aria-label="Twitch" title="Ir a Twitch de @laurasacnhez">
                        <Twitch size={32} className="text-purple-600"/>
                    </a> */}
                </section>
            </header>

            <main className="p-4 pb-16 text-amber-50 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2  gap-8">
                    <div className="col-span-1 rounded-3xl overflow-hidden relative min-h-[350px] flex items-end p-4 md:p-8 transition-transform duration-300 hover:scale-105 group">
                        <img src="/images/info-lau-2.webp" alt="Laura Sanchez" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <p className="relative z-10 text-md md:text-2xl font-bold text-white max-w-3xl">
                            Soy Laura Sánchez, entrenadora personal y futbolista profesional, apasionada por transformar vidas a través del movimiento, la disciplina y la motivación.
                        </p>
                    </div>
                    <div className="col-span-1 rounded-3xl overflow-hidden relative min-h-[350px] flex items-end p-4 md:p-8 transition-transform duration-300 hover:scale-105 group">
                        <img src="/images/info-lau-1.webp" alt="Laura Sanchez" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <p className="relative z-10 text-md md:text-xl font-bold text-white max-w-3xl">
                            Mi camino en el deporte, con más de 10 años en alto rendimiento, estuvo marcado por una lesión de rodilla que me alejó de las canchas durante 8 meses. Esa experiencia no solo me enseñó sobre resiliencia, sino que despertó mi interés por la recuperación y el fortalecimiento de lesiones.
                        </p>
                    </div>
                    <div className="col-span-1 rounded-3xl overflow-hidden relative min-h-[350px] flex items-end p-4 md:p-8 transition-transform duration-300 hover:scale-105 group">
                        <img src="/images/info-lau-3.webp" alt="Laura Sanchez" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <p className="relative z-10 text-md md:text-2xl font-bold text-white max-w-3xl">
                            Hoy, me especializo en ayudar a personas a alcanzar sus objetivos de fuerza, hipertrofia y bienestar, con un enfoque en la recuperación de lesiones para que vuelvan a entrenar con seguridad y confianza.
                        </p>
                    </div>
                    <div className="col-span-1 rounded-3xl overflow-hidden relative min-h-[350px] flex items-end p-4 md:p-8 transition-transform duration-300 hover:scale-105 group">
                        <img src="/images/info-lau-6.webp" alt="Laura Sanchez" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <p className="relative z-10 text-lg md:text-2xl font-bold text-white max-w-3xl">
                            Mi filosofía es clara: el cambio empieza desde adentro. Te guiaré para que construyas un estilo de vida fuerte, saludable y sostenible.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1 rounded-3xl overflow-hidden min-h-[250px] transition-transform duration-300 hover:scale-105">
                             <img src="/images/info-lau-5.webp" alt="Laura Sanchez" className="w-full h-full object-cover" />
                        </div>
                        <div className="col-span-1 rounded-3xl overflow-hidden min-h-[250px] transition-transform duration-300 hover:scale-105">
                             <img src="/images/info-lau-4.webp" alt="Laura Sanchez" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};