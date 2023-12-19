import React from 'react';

const ColorCard = ({ data, setSelect }) => {
    const { color, title } = data;

    const handleClick = () => {
        setSelect(title);
    };

    return (
        <div className='color_card' style={{ backgroundColor: color }} onClick={handleClick}>
            <span>{title}</span>
        </div>
    );
};

export default ColorCard;
