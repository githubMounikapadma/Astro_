import React from 'react';
import { Link } from 'react-router-dom';
import navBg from '../assets/navBg.jpeg';

const Header = () => {
    return (
        <header
            className="bg-cover bg-center h-70 p-8 relative"
            style={{ backgroundImage: `url(${navBg})` }}
        >
            <div className="container mx-auto px-4 h-full flex flex-col justify-start p-8 sm:p-4">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-white text-2xl font-bold" style={{ marginTop: "-36px" }}>AstroChalit</h5>
                    <div style={{ marginTop: "-35px" }}>
                        <nav className="flex space-x-4 text-white text-right" style={{ padding: "-39" }}>
                            <Link to="/" className="hover:underline px-2 py-2">Home</Link>
                            <Link to="/pricing" className="hover:underline px-2 py-2">Pricing</Link>
                            <Link to="/astrology-options" className="hover:underline px-2 py-2">Products</Link>
                            <Link to="/docs" className="hover:underline px-2 py-2">Docs</Link>
                            <Link to="/dashboard">
                                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100">Dashboard</button>
                            </Link>
                        </nav>
                    </div>
                </div>
                {/* Main Heading */}
                <h1 className="text-white text-4xl font-bold mb-4 sm:text-3xl text-center" style={{ marginTop: "30px", maxWidth: "600px", margin: "39 auto", marginLeft: "-105px" }}>
                    Start Your Journey With Us!
                </h1>
                
                {/* Paragraph */}
                <div className="w-full sm:w-3/4 mx-auto text-center">
                    <p className="text-white text-lg text-left px-5 sm:px-2" style={{ marginLeft: "-165px", marginRight: "auto", maxWidth: "800px", marginTop: "20px" }}>
                        Pick from our Vedic or Western Astrology options to begin your free trial. Explore the features that interest you the most.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
