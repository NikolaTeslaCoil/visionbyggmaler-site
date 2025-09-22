import React from 'react';
import { Phone, Mail, MapPin, Hammer, Paintbrush, Grid3x3, CheckCircle, Users, Award, Clock, User, Send, ArrowRight } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = React.useState<number>(0);
  
  // Gallery images for lightbox navigation
  const galleryImages = [
    '/assets/gallery/gallery-01.jpg.jpg',
    '/assets/gallery/gallery-02.jpg.jpg',
    '/assets/gallery/gallery-03.jpg.jpg',
    '/assets/gallery/gallery-04.jpg.jpg',
    '/assets/gallery/gallery-05.jpg.jpg',
    '/assets/gallery/gallery-06.jpg.jpg',
    '/assets/gallery/gallery-07.jpg.jpg',
    '/assets/gallery/gallery-08.jpg.jpg',
    '/assets/gallery/gallery-09.jpg.jpg',
    '/assets/gallery/gallery-10.jpg.jpg',
    '/assets/gallery/gallery-11.jpg.jpg',
    '/assets/gallery/gallery-12.jpg.jpg',
    '/assets/gallery/gallery-13.jpg.jpg',
    '/assets/gallery/gallery-14.jpg.jpg',
    '/assets/gallery/gallery-15.jpg.jpg',
    '/assets/gallery/gallery-16.jpg.jpg',
    '/assets/gallery/gallery-17.jpg.jpg',
    '/assets/gallery/gallery-18.jpg.jpg',
    '/assets/gallery/gallery-19.jpg.jpg',
    '/assets/gallery/gallery-20.jpg.jpg',
    '/assets/gallery/gallery-21.jpg.jpg',
    '/assets/gallery/gallery-22.jpg.jpg',
    '/assets/gallery/gallery-23.jpg.jpg',
    '/assets/gallery/gallery-24.jpg.jpg',
    '/assets/gallery/gallery-25.jpg.jpg',
    '/assets/gallery/gallery-26.jpg.jpg',
    '/assets/gallery/gallery-27.jpg.jpg',
    '/assets/gallery/gallery-28.jpg.jpg'
  ];

  const openLightbox = (image: string) => {
    const index = galleryImages.indexOf(image);
    setLightboxIndex(index);
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setLightboxImage(galleryImages[prevIndex]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'kontakt':
        return <KontaktOssPage />;
      case 'tjenester':
        return <TjenesterPage setCurrentPage={setCurrentPage} />;
      case 'galleri':
        return <GalleriPage openLightbox={openLightbox} />;
      case 'om-oss':
        return <OmOssPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`absolute top-0 left-0 right-0 z-50 ${currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'bg-white' : 'bg-black/20 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-28">
            <button onClick={() => setCurrentPage('home')}>
              <img
                src="/assets/vision-logo-tight.png"
                alt="VISION BYGG & MALER AS logo"
                className="h-21 sm:h-28 w-auto opacity-100 object-contain"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))',
                  imageRendering: 'crisp-edges'
                }}
              />
            </button>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`transition-colors duration-200 ${
                  currentPage === 'home' 
                    ? (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-red-800' : 'text-red-200')
                    : (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-black hover:text-red-800' : 'text-white hover:text-red-200')
                }`}
              >
                Hjem
              </button>
              <button 
                onClick={() => setCurrentPage('tjenester')}
                className={`transition-colors duration-200 ${
                  currentPage === 'tjenester' 
                    ? (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-red-800' : 'text-red-200')
                    : (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-black hover:text-red-800' : 'text-white hover:text-red-200')
                }`}
              >
                Tjenester
              </button>
              <button 
                onClick={() => setCurrentPage('galleri')}
                className={`transition-colors duration-200 ${
                  currentPage === 'galleri' 
                    ? (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-red-800' : 'text-red-200')
                    : (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-black hover:text-red-800' : 'text-white hover:text-red-200')
                }`}
              >
                Galleri
              </button>
              <a 
                href="#om-oss" 
                className={`transition-colors duration-200 ${
                  currentPage === 'om-oss' 
                    ? (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-red-800' : 'text-red-200')
                    : (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-black hover:text-red-800' : 'text-white hover:text-red-200')
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage('om-oss');
                }}
              >
                Om Oss
              </a>
              <button 
                onClick={() => setCurrentPage('kontakt')}
                className={`transition-colors duration-200 ${
                  currentPage === 'kontakt' 
                    ? (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-red-800' : 'text-red-200')
                    : (currentPage === 'home' || currentPage === 'tjenester' || currentPage === 'galleri' || currentPage === 'kontakt' || currentPage === 'om-oss' ? 'text-black hover:text-red-800' : 'text-white hover:text-red-200')
                }`}
              >
                Kontakt oss
              </button>
            </div>
            <button 
              onClick={() => setCurrentPage('kontakt')}
              className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ring oss
            </button>
          </div>
        </div>
      </nav>

      {renderPage()}
      
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightboxImage} 
              alt="Gallery image" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Previous button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GalleriPage({ openLightbox }: { openLightbox: (image: string) => void }) {
  // Gallery images from local assets
  const galleryImages = [
    '/assets/gallery/gallery-01.jpg.jpg',
    '/assets/gallery/gallery-02.jpg.jpg',
    '/assets/gallery/gallery-03.jpg.jpg',
    '/assets/gallery/gallery-04.jpg.jpg',
    '/assets/gallery/gallery-05.jpg.jpg',
    '/assets/gallery/gallery-06.jpg.jpg',
    '/assets/gallery/gallery-07.jpg.jpg',
    '/assets/gallery/gallery-08.jpg.jpg',
    '/assets/gallery/gallery-09.jpg.jpg',
    '/assets/gallery/gallery-10.jpg.jpg',
    '/assets/gallery/gallery-11.jpg.jpg',
    '/assets/gallery/gallery-12.jpg.jpg',
    '/assets/gallery/gallery-13.jpg.jpg',
    '/assets/gallery/gallery-14.jpg.jpg',
    '/assets/gallery/gallery-15.jpg.jpg',
    '/assets/gallery/gallery-16.jpg.jpg',
    '/assets/gallery/gallery-17.jpg.jpg',
    '/assets/gallery/gallery-18.jpg.jpg',
    '/assets/gallery/gallery-19.jpg.jpg',
    '/assets/gallery/gallery-20.jpg.jpg',
    '/assets/gallery/gallery-21.jpg.jpg',
    '/assets/gallery/gallery-22.jpg.jpg',
    '/assets/gallery/gallery-23.jpg.jpg',
    '/assets/gallery/gallery-24.jpg.jpg',
    '/assets/gallery/gallery-25.jpg.jpg',
    '/assets/gallery/gallery-26.jpg.jpg',
    '/assets/gallery/gallery-27.jpg.jpg',
    '/assets/gallery/gallery-28.jpg.jpg'
  ];

  return (
    <>
      {/* Gallery Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-red-800">Galleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Et utvalg av våre prosjekter – kvalitet levert gjennom 20 år.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Prosjekt ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lyst til å vite mer om våre tjenester?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Kontakt oss i dag for en uforpliktende samtale.
          </p>
          <button 
            onClick={() => window.location.href = '#kontakt'}
            className="bg-white hover:bg-gray-100 text-red-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Kontakt oss
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VISION BYGG & MALER AS</h3>
              <p className="text-gray-400 mb-4">
                Profesjonelt håndverk med over 20 års erfaring innen snekring, maling og flislegging.
              </p>
              <p className="text-gray-400">
                Org.nr: 922 159 882
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Våre tjenester</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Snekring og innredning</li>
                <li>Interiør og eksteriør maling</li>
                <li>Profesjonell flislegging</li>
                <li>Reparasjoner og vedlikehold</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Telefon: +47 967 41 135</p>
                <p>E-post: visionbygg@gmail.com</p>
                <p>Serviceområde: Oslo og Akershus</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VISION BYGG & MALER AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function TjenesterPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      {/* Header Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Våre Tjenester
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Profesjonelt håndverk innen snekring, maling og flislegging – alltid levert med kvalitet og presisjon.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Snekring */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop')`
              }}>
                <div className="h-full bg-black/20 flex items-center justify-center">
                  <div className="bg-red-800 p-4 rounded-full">
                    <Hammer className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Snekring</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Vi tilbyr skreddersydde løsninger for både nybygg, tilbygg og renovering. 
                  Vårt erfarne team leverer solid håndverk som varer i generasjoner.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Innredningssnekring og møbelbygging
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Dører, vinduer og karmer
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Tilbygg og renovering
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Reparasjoner og vedlikehold
                  </li>
                </ul>
              </div>
            </div>

            {/* Maling */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop')`
              }}>
                <div className="h-full bg-black/20 flex items-center justify-center">
                  <div className="bg-red-800 p-4 rounded-full">
                    <Paintbrush className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Maling</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Fra innvendig til utvendig maling – vi sørger for et profesjonelt resultat 
                  med fokus på detaljer, farger og lang holdbarhet.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Interiør maling og tapetsering
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Eksteriør maling og fasadearbeid
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Spesialmaling og dekorative teknikker
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Fargerådgivning og design
                  </li>
                </ul>
              </div>
            </div>

            {/* Flislegging */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: `url('https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop')`
              }}>
                <div className="h-full bg-black/20 flex items-center justify-center">
                  <div className="bg-red-800 p-4 rounded-full">
                    <Grid3x3 className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Flislegging</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Vi leverer flisarbeid av høy kvalitet til bad, kjøkken og gulv. 
                  Presisjon og estetikk er alltid i fokus.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Badrom og våtrom flislegging
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Kjøkken og arbeidsbenker
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Gulvfliser og naturstein
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    Mosaikk og designfliser
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Vår <span className="text-red-800">arbeidsprosess</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi følger en strukturert tilnærming for å sikre kvalitet og kundetilfredshet i alle prosjekter
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-800">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konsultasjon</h3>
              <p className="text-gray-600">
                Vi møter deg for å forstå dine behov og ønsker for prosjektet
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-800">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planlegging</h3>
              <p className="text-gray-600">
                Vi lager detaljerte planer og gir deg et transparent pristilbud
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-800">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Utførelse</h3>
              <p className="text-gray-600">
                Vårt erfarne team utfører arbeidet med høy kvalitet og presisjon
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-800">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oppfølging</h3>
              <p className="text-gray-600">
                Vi følger opp arbeidet og sørger for at du er 100% fornøyd
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hvorfor Velge Oss Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hvorfor <span className="text-red-800">velge oss?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Erfaring</h3>
              <p className="text-gray-600">Over 20 års erfaring i bransjen</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kvalitet</h3>
              <p className="text-gray-600">Vi leverer solid håndverk som varer</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trygghet</h3>
              <p className="text-gray-600">Kontrakter, forsikringer og garantier</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alt på ett sted</h3>
              <p className="text-gray-600">Alle fag samlet under én paraply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar for å starte ditt prosjekt?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Kontakt oss i dag for en uforpliktende prat om ditt bygge- eller oppussingsprosjekt.
          </p>
          <button 
            onClick={() => setCurrentPage('kontakt')}
            className="bg-white hover:bg-gray-100 text-red-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Kontakt oss
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VISION BYGG & MALER AS</h3>
              <p className="text-gray-400 mb-4">
                Profesjonelt håndverk med over 20 års erfaring innen snekring, maling og flislegging.
              </p>
              <p className="text-gray-400">
                Org.nr: 922 159 882
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Våre tjenester</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Snekring og innredning</li>
                <li>Interiør og eksteriør maling</li>
                <li>Profesjonell flislegging</li>
                <li>Reparasjoner og vedlikehold</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Telefon: +47 967 41 135</p>
                <p>E-post: visionbygg@gmail.com</p>
                <p>Serviceområde: Oslo og Akershus</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VISION BYGG & MALER AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function OmOssPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      {/* Header Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Om Vision Bygg & Maler AS
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            20 års erfaring med kvalitetshåndverk og kundetilfredshet
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Vår historie og <span className="text-red-800">visjon</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vision Bygg & Maler AS ble etablert med en klar visjon: å levere håndverk av høyeste kvalitet 
                med fokus på kundetilfredshet og langsiktige relasjoner. Med over 20 års erfaring i byggebransjen 
                har vi bygget opp en solid reputasjon som en pålitelig partner for både private og bedrifter.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vi tror på at kvalitet ikke er en tilfeldighet, men et resultat av grundig planlegging, 
                riktig utførelse og kontinuerlig forbedring. Hver jobb vi påtar oss blir behandlet med 
                samme omhu og profesjonalitet, uansett størrelse.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Håndverker i arbeid"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Våre <span className="text-red-800">verdier</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Disse verdiene styrer alt vi gjør og er grunnlaget for vårt arbeid
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kvalitet</h3>
              <p className="text-gray-600">
                Vi leverer alltid håndverk av høyeste standard.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer className="w-8 h-8 text-red-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Alt på ett sted</h3>
                <p className="text-gray-600">
                  Alle håndverk samlet under én paraply.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fagfolk</h3>
              <p className="text-gray-600">
                Dyktige og hyggelige håndverkere.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trygghet</h3>
              <p className="text-gray-600">
                Kontrakter, forsikringer og ekstra garantier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-800 rounded-2xl p-12 text-center shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              Fra idé til ferdig resultat – vi tar vare på prosjektet ditt hele veien.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vil du vite mer eller starte ditt neste prosjekt?
          </h2>
          <button 
            onClick={() => setCurrentPage('kontakt')}
            className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Kontakt oss i dag
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VISION BYGG & MALER AS</h3>
              <p className="text-gray-400 mb-4">
                Profesjonelt håndverk med over 20 års erfaring innen snekring, maling og flislegging.
              </p>
              <p className="text-gray-400">
                Org.nr: 922 159 882
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Våre tjenester</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Snekring og innredning</li>
                <li>Interiør og eksteriør maling</li>
                <li>Profesjonell flislegging</li>
                <li>Reparasjoner og vedlikehold</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Telefon: +47 967 41 135</p>
                <p>E-post: visionbygg@gmail.com</p>
                <p>Serviceområde: Oslo og Akershus</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VISION BYGG & MALER AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function HomePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat pt-28"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(139, 0, 0, 0.3)), url('https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pt-28">
          <div className="text-center text-white max-w-5xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              VISION BYGG & <span className="text-red-300">MALER AS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Profesjonelt håndverk med over 20 års erfaring innen snekring, maling og flislegging
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Ring oss: +47 967 41 135
              </button>
              <button 
                onClick={() => setCurrentPage('galleri')}
                className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
              >
                Se våre prosjekter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative">
                <img
                  src="/assets/painter.jpg"
                  alt="Professional painter at work"
                  className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
                />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  20 års erfaring er din trygghet!
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Vision Bygg & Maler AS har 20 års erfaring. Vi tilbyr alt av innvendig og utvendig malerarbeid og rehabilitering av hus og fasader. Hver jobb blir gjennomført med god tradisjonell yrkesstolthet.
                </p>
                <div>
                  <button
                    onClick={() => setCurrentPage('tjenester')}
                    className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Les mer
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Våre <span className="text-red-800">tjenester</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi leverer kvalitetshåndverk innen snekring, maling og flislegging til både private og bedrifter
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Snekring</h3>
              <p className="text-gray-600 leading-relaxed">
                Skreddersydde løsninger for innredning, møbler, dører og vinduer. 
                Vi leverer solid håndverk som varer i generasjoner.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Paintbrush className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maling</h3>
              <p className="text-gray-600 leading-relaxed">
                Profesjonell maling både innvendig og utvendig. Vi bruker kun kvalitetsmaling 
                og sørger for et perfekt resultat.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Grid3x3 className="w-8 h-8 text-red-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flislegging</h3>
              <p className="text-gray-600 leading-relaxed">
                Ekspert flislegging for bad, kjøkken og gulv. Vi leverer presist arbeid 
                med fokus på både funksjon og estetikk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Om <span className="text-red-800">Vision Bygg & Maler</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Med over 20 års erfaring i byggebransjen har vi etablert oss som en pålitelig 
                partner for både private og bedrifter i Oslo og Akershus. Vår lidenskap for 
                kvalitetshåndverk og kundetilfredshet driver oss til å levere eksepsjonelle resultater.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-red-800 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Erfarne fagfolk</h4>
                    <p className="text-gray-600">20+ års erfaring</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-red-800 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kvalitetsgaranti</h4>
                    <p className="text-gray-600">Fornøyde kunder</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-red-800 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Punktlighet</h4>
                    <p className="text-gray-600">Leverer på tid</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 text-red-800 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sertifisert</h4>
                    <p className="text-gray-600">Org.nr: 922 159 882</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Håndverker i arbeid"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klar for å starte ditt prosjekt?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Kontakt oss i dag for en uforpliktende samtale om ditt bygge- eller oppussingsprosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+4796741135"
              className="bg-white hover:bg-gray-100 text-red-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ring oss: +47 967 41 135
            </a>
            <button 
              className="bg-[#8B0000] text-white px-8 py-3 rounded-lg hover:bg-red-800 transition-colors flex items-center gap-2"
              onClick={() => setCurrentPage('kontakt')}
            >
              <Mail className="w-5 h-5" />
              Send e-post
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VISION BYGG & MALER AS</h3>
              <p className="text-gray-400 mb-4">
                Profesjonelt håndverk med over 20 års erfaring innen snekring, maling og flislegging.
              </p>
              <p className="text-gray-400">
                Org.nr: 922 159 882
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Våre tjenester</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Snekring og innredning</li>
                <li>Interiør og eksteriør maling</li>
                <li>Profesjonell flislegging</li>
                <li>Reparasjoner og vedlikehold</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Telefon: +47 967 41 135</p>
                <p>E-post: visionbygg@gmail.com</p>
                <p>Serviceområde: Oslo og Akershus</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VISION BYGG & MALER AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function KontaktOssPage() {
  const [formData, setFormData] = React.useState({
    navn: '',
    telefon: '',
    epost: '',
    tjeneste: '',
    melding: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Takk for din henvendelse! Vi kontakter deg snart.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kontakt Oss
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vi er klare til å hjelpe deg med ditt neste prosjekt
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send oss en melding</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="navn" className="block text-sm font-medium text-gray-700 mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="navn"
                    name="navn"
                    required
                    value={formData.navn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Ditt fulle navn"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+47 xxx xx xxx"
                  />
                </div>
                
                <div>
                  <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="epost"
                    name="epost"
                    value={formData.epost}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="din@epost.no"
                  />
                </div>
                
                <div>
                  <label htmlFor="tjeneste" className="block text-sm font-medium text-gray-700 mb-2">
                    Tjeneste
                  </label>
                  <select
                    id="tjeneste"
                    name="tjeneste"
                    value={formData.tjeneste}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Velg tjeneste</option>
                    <option value="snekring">Snekring</option>
                    <option value="maling">Maling</option>
                    <option value="flislegging">Flislegging</option>
                    <option value="kombinert">Kombinert prosjekt</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="melding" className="block text-sm font-medium text-gray-700 mb-2">
                    Melding *
                  </label>
                  <textarea
                    id="melding"
                    name="melding"
                    required
                    rows={5}
                    value={formData.melding}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Beskriv ditt prosjekt..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send melding
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformasjon</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-red-800 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <a href="tel:+4796741135" className="text-red-800 hover:text-red-900">
                        +47 967 41 135
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-red-800 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">E-post</p>
                      <a href="mailto:visionbygg@gmail.com" className="text-red-800 hover:text-red-900">
                        visionbygg@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-red-800 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Serviceområde</p>
                      <p className="text-gray-600">Oslo og Akershus</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <User className="w-6 h-6 text-red-800 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Organisasjonsnummer</p>
                      <p className="text-gray-600">922 159 882</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Åpningstider</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mandag - Fredag</span>
                    <span className="font-semibold">07:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lørdag</span>
                    <span className="font-semibold">08:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Søndag</span>
                    <span className="font-semibold">Stengt</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Ved akutte saker kan vi kontaktes utenom åpningstider
                </p>
              </div>

              <div className="bg-red-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Gratis befaring</h3>
                <p className="text-red-100 mb-4">
                  Vi tilbyr gratis befaring og pristilbud for alle prosjekter i Oslo og Akershus.
                </p>
                <a 
                  href="tel:+4796741135"
                  className="bg-white text-red-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
                >
                  Ring for befaring
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">VISION BYGG & MALER AS</h3>
              <p className="text-gray-400 mb-4">
                Profesjonelt håndverk med over 20 års erfaring innen snekring, maling og flislegging.
              </p>
              <p className="text-gray-400">
                Org.nr: 922 159 882
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Våre tjenester</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Snekring og innredning</li>
                <li>Interiør og eksteriør maling</li>
                <li>Profesjonell flislegging</li>
                <li>Reparasjoner og vedlikehold</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>Telefon: +47 967 41 135</p>
                <p>E-post: visionbygg@gmail.com</p>
                <p>Serviceområde: Oslo og Akershus</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VISION BYGG & MALER AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;