import React, { useEffect, useState } from 'react';
import './MyGames.css';
import { getMyGames } from '../../ApiService/ApiService';

function MyGames() {
    const [games, setGames] = useState<Game[]>([]);
    
    //get my games
    useEffect(() => {
        // Викликаємо функцію при завантаженні сторінки
        getMyGames()
          .then(data => {
            // Отримані дані доступні тут
            setGames(data);
          })
          .catch(error => {
            // Обробка помилки
            console.error(error);
          });
      }, []);

    return (
        <div className='gamesDiv'>
           {games.map((item) => (
                <div key={item.id} className='gameCard'>
                    <h1>{item.name}</h1>
                    <img src={item.imagePath}/>
                    <button>Enter</button>
                </div>        
            ))}
        </div>
    );
}

export default MyGames;
