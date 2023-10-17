import React, { useState } from 'react';
import './Header.css';
import ImageButton from '../UI/ImageButton';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Search
    const [text, setText] = useState(''); 

    const handleTextChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        // Update the state with the new text value when the input changes
        setText(e.target.value);
    };

    // burger menu
    const handleButtonClick = () => {
        setIsMenuOpen(!isMenuOpen); // Змінюємо стан при кожному натисканні на кнопку.
    };

    //signin/sign up

    return (
        <header className='header'>
            <h1 className = "title">Paradox Play Hub</h1>

            <div className='search'>
                <img src='/img/22f5db1d72e8af0c254b9dc97dd9c37b.png' />

                <input
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                />
            </div>

            <ImageButton
                imageUrl="/img/burger menu.png"
                onClick={handleButtonClick}
                altText="Image Button"
            />

            {isMenuOpen && (
                <div className="side-menu">
                    <img src='/img/b2a3a7add962f529aed34acb8d46a38e.png'/>
                    <button>Sign in/Sign up</button>
                </div>
            )}
        </header>
    );
}

export default Header;