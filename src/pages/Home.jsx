import React from 'react';

import { Blog, Features, Header, Info, Services, Video } from '../../containers';
import { Article, Brand, Feature, Work } from '../../components';

function Home() {
  return (
    <div className="home">
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
    </div>
  )
}

export default Home;
