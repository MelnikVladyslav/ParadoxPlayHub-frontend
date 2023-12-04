import React, { useEffect, useState } from 'react';
import './GamePage.css';
import { getGame } from '../../ApiService/ApiService';
import { useParams } from 'react-router-dom';

function GamePage(props: { gameId: number }) {
    const { gameId } = props;
    const [game, setGame] = useState<Game>();

    // Call the function when the component mounts
    getGame(gameId)
        .then(data => {
            // Set the obtained data here
            setGame(data);
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });

    return(
        <div className='back'>
            <img src={game?.imagePath}></img>
            <div className='name'>
                <h1>{game?.name}</h1>
            </div>
            <div>
                <h3>{game?.price}</h3>
            </div>
            <div> 
                <p>{game?.description}</p>
            </div>
        </div>
    );
}

export default GamePage;