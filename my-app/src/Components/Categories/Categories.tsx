import React, { useEffect, useState } from 'react';
import './Categories.css';
import { getGanres } from '../../ApiService/ApiService';

function Categories() {
    const [ganres, setGanres] = useState<Ganr[]>([]);

    //get categories
    useEffect(() => {
        // Викликаємо функцію при завантаженні сторінки
        getGanres()
          .then(data => {
            // Отримані дані доступні тут
            setGanres(data);
          })
          .catch(error => {
            // Обробка помилки
            console.error(error);
          });
      }, []);

    return (
        <div className='cat'>
            <h1>Categories</h1>
            <ul>
                {ganres.map((item, index) => (
                    <li key={index}>
                        <a href='#'>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;
