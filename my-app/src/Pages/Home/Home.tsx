import React from 'react';
import './Home.css';
import Header from '../../Components/Headers/Header';
import Fotter from '../../Components/Fotter/Fotter';
import Categories from '../../Components/Categories/Categories';
import Games from '../../Components/Games/Games';

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
