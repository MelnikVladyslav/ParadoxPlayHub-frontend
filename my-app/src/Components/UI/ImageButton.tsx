import React from 'react';
import './ImageButton.css'

interface ImageButtonProps {
    imageUrl: string;
    onClick: () => void;
    altText: string;
  }

function ImageButton({ imageUrl, onClick, altText }: ImageButtonProps) {
  return (
    <button onClick={onClick} className='imgBut'>
      <img src={imageUrl} alt={altText} />
    </button>
  );
}

export default ImageButton;
