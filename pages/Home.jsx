import React from 'react';
import { Link } from 'react-router-dom';
// file created we have to navigate and run


const Home = () => {
  return (
    <div>
      <Link to="/" className="hover:underline px-2 py-2">Home</Link>

      <h1>Hello, World!</h1>
    </div>
  );
};

export default Home;
