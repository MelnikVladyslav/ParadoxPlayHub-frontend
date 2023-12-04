import React from 'react';
import Header from '../../Components/Headers/Header';
import Fotter from '../../Components/Fotter/Fotter';
import { useParams } from 'react-router-dom';
import GamePage from './GamePage';

function GameP() {
    const { gameId = 'defaultId' } = useParams<{ gameId?: string }>();

    // Перетворюємо з строкового типу на число, якщо потрібно
    const parsedGameId = parseInt(gameId, 10);
    
    return (
        <div>
            <Header/>
            <GamePage gameId={parsedGameId}/>
            <Fotter/>
        </div>
    );
}

export default GameP;
