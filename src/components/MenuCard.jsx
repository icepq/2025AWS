import React from 'react';

const MenuCard = ({ title, description, imageSrc, onClick }) => {
    return (
        <div className="menu-card" onClick={onClick}>
            <div className="card-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={imageSrc} alt={title} className="card-image" />
        </div>
    );
};

export default MenuCard;