import React, { useState } from 'react';
import './Header.css';
import ImageButton from '../UI/ImageButton';

function Header() {
    // Initialize a state variable to store the text value
    const [text, setText] = useState(''); 

    // Function to handle changes in the input field
    const handleTextChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        // Update the state with the new text value when the input changes
        setText(e.target.value);
    };

    const handleButtonClick = () => {
        // Handle the button click event here
        console.log('Button clicked!');
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
        </header>
    );
}

export default Header;