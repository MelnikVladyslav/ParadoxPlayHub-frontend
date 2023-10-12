import React from 'react';
import './Home.css';
import Header from '../Headers/Header';
import Fotter from '../Fotter/Fotter';
import Categories from '../Categories/Categories';

function Home() {

    return (
        <div>
            <Header/>
            <Categories/>
            <Fotter/>
        </div>
    );
}

export default Home;
