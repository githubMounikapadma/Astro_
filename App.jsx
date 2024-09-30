import React from "react";
import Header from './components/Header'; 
import AstrologyOptions from './components/AstrologyOptions';
import PricingSection from './components/PricingSection';
import './index.css';


const App = () => {
    return (
        // here we have use routers for navigation
        <div>
            <Header /> 
            <AstrologyOptions/>
            <PricingSection/>
        </div>
    );
};    
  

export default App
