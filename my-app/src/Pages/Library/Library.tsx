import React from 'react';
import Header from '../../Components/Headers/Header';
import './Library.css';
import Fotter from '../../Components/Fotter/Fotter';
import MyGames from '../../Components/MyGames/MyGames';

function Library() {

    return (
        <div>
            <Header/>
            <MyGames />
            <Fotter/>
        </div>
    );
}

export default Library;
