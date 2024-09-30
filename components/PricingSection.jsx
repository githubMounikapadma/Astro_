import React from 'react';
import styles from './astrologyoptions.module.css';


const PricingSection = () => {
    return (
        <section className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4" >Discover the plan that’s made for you</h1>
            <p className="text-lg mb-8" style={{color:'#094746'}}>Choose Yearly Plan,Get 2 Months <b>Free!</b>.</p>
            <div>
                <button className="bg-white text-teal-700 border border-teal-700 px-9 m-px py-2 rounded " style={{borderRadius:"45px", backgroundColor:"#094746",color:"white"  }}>Monthly</button>
                <button className="bg-white text-teal-700 border border-teal-700 px-9 py-2 rounded"style={{borderRadius:"45px", overflow: "hidden"}}>Yearly</button>
                </div>

            <p className="mt-4 text-right m-4 p-5">
                Looking for a Custom Plan? <a href="#" className="underline" style={{ color: '#155e75' }}>Click Here</a>

            </p>


            {/* Pricing Cards */}
            <div className="flex justify-center space-x-8">

                {/* Basic Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-1/4 border-2" style={{ color: "#094746" }}>
                    <h3 className="text-xl font-bold mb-4">Basic Plan</h3>
                    <p className="mb-4">Get full API access with a monthly request cap. Perfect for those just starting out or with lighter needs!</p>
                    <p className="text-2xl font-bold mb-2">₹ 1,499 /-</p>
                    <p className="mb-4">Duration: 30 days</p>
                    <p className="mb-4">API Requests: 50k/month</p>
                    <button className="bg-teal-700 text-black px-4 py-2 rounded" style={{ backgroundColor: "#0f766e", color: "white" }}>Get Started</button>
                </div>

                {/* Standard Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-1/4 border-2" style={{ backgroundColor: "#0f766e", color: "white" }}>
                    <h3 className="text-xl font-bold mb-4">Standard Plan</h3>
                    <p className="mb-4">Enjoy all API features with a generous request limit. Ideal for growing projects that need a bit more flexibility.</p>
                    <p className="text-2xl font-bold mb-2">₹ 4,999 /-</p>
                    <p className="mb-4">Duration: 30 days</p>
                    <p className="mb-4">API Requests: 200k/month</p>
                    <button className="bg-white text-black px-4 py-2 rounded">Get Started</button>
                </div>

                {/* Premium Plan */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-1/4 border-2" style={{ color: "#094746" }}>
                    <h3 className="text-xl font-bold mb-4">Premium Plan</h3>
                    <p className="mb-4">Unlock unlimited API access with top-tier support and no limits. The ultimate choice for heavy users and critical applications!</p>
                    <p className="text-2xl font-bold mb-2">₹ 9,999 /-</p>
                    <p className="mb-4">Duration: 30 days</p>
                    <p className="mb-4">API Requests: 500k/month</p>
                    <button className="bg-teal-700 text-black px-4 py-2 rounded" style={{ backgroundColor: "#0f766e", color: "white" }}>Get Started</button>
                </div>
            </div>


        </section>
    );
};

export default PricingSection;
