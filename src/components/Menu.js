import React from 'react';
import recipes from '../recipes'; // Import this properly

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This week’s specials</h2>
        <button>Order Menu</button>
      </div>
      <div className='cards'>
        {recipes.map(recipe => (
          <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt={recipe.title} />
            <div className='menu-content'>
              <div>
                <h5>{recipe.title}</h5>
                <p>${recipe.price.toFixed(2)}</p>
              </div>
              <p>{recipe.description}</p>
              <button className='orderBtn'>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
