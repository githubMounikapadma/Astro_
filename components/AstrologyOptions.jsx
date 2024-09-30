import React from 'react';


const AstrologyOptions = () => {
  
    
    return (
        <main className="container mx-auto px-4 py-8">
            <section className="text-center mb-12">
                
                <div className="flex justify-center space-x-8">
                    {/* Vedic Astrology Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-1/3 border-2">
                        <h2 className="text-xl font-bold mb-4 text-left p-2">Vedic Astrology</h2>
                        <p className="mb-6">Enhance your app with our Vedic Astrology APIs, offering Shodashavarga charts, ephemeris, Planet Ingress, and Bio Rhythm. Choose the best package to provide detailed and insightful astrological services to your users seamlessly.</p>
                        <button className="bg-white text-teal-700 border border-teal-700 px-4 py-2 rounded" style={{backgroundColor:"#094746",color:"white"}}>Choose Package</button>
                    </div>
                    
                    {/* Western Astrology Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 w-1/3 border-2">
                        <h2 className="text-xl font-bold mb-4 text-left p-2">Western Astrology</h2>
                        <p className="mb-6">Enhance your app with our Western Astrology APIs, offering precise ephemeris and Planet Ingress data. Choose the best package to provide accurate and insightful astrological services to your users seamlessly.</p>
                        <button className="bg-white px-4 py-2 rounded"
                        style={{ color: '#094746', borderColor: '#094746', borderWidth: '2px', borderStyle: 'solid' }}>Choose Package</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AstrologyOptions;
