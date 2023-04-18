import React from 'react';
import accessories from "./accessories.json";


export const AccessoryList = () => {
    const accessoryCards = accessories.map((accessory) =>
        <div key={accessory.id} className="accessory-card">
            <img src={accessory.image} alt={accessory.name} />
            <h2>{accessory.name}</h2>
            <p>{accessory.price}</p>
        </div>
    );

    return (
        <div className="accessory-list">
            {accessoryCards}
        </div>)
}

console.log({accessories})

