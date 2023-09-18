import React from 'react';

import { Blog, Features, Footer, Header, Info, Services, Video } from './containers';
import { Article, Brand, Feature, Navbar, Work } from './components';

import './App.css';

function App() {
  return (
    
      <div className='App'>
        <Navbar />
        
            <Header />
            <Brand />
            <Video /> 
            <Features />
            <Work />
            <Feature />
            <Services />
            <Info />
            <Blog />
            <Article />
          
        <Footer />
      </div>
    
  )
}

export default App
