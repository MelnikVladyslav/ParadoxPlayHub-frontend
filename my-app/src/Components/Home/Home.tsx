import React from 'react';
import './Home.css';
import Header from '../Headers/Header';
import Fotter from '../Fotter/Fotter';
import Categories from '../Categories/Categories';
import Games from '../Games/Games';

function Home() {

    return (
        <div>
            <Header/>
            <Categories/>
            <Games/>
            <Fotter/>
        </div>
    );
}

export default Home;
