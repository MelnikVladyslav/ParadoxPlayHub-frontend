import React, { useState } from 'react';
import './Header.css';
import ImageButton from '../UI/ImageButton';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const userStr = localStorage.getItem('user');
    let user: User | null = null;

    if (userStr !== null) {
        user = JSON.parse(userStr);
    }
    const [isLog, setIsLog] = useState(user !== null);
    

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

            {isMenuOpen && !isLog && (
                <div className="side-menu">
                    <img src='/img/b2a3a7add962f529aed34acb8d46a38e.png'/>
                    <button>
                        <Link to="/signIn">Sign in/Sign up</Link>
                    </button>
                </div>
            )}
            {isMenuOpen && isLog && (
                <div className="side-menu">
                    <div className='profile'>
                    <img src={user?.url}/>
                    <button>
                        <Link to="/">Profile</Link>
                    </button>
                    </div>
                    <div className='items'>
                        <button>
                            <Link to="/">Library</Link>
                        </button>
                        <button>
                            <Link to="/">Download</Link>
                        </button>
                        <button>Log out</button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;