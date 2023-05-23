import React , { useState, useEffect } from 'react';
import './LifeLineComponent.css'

const Lifelines = () => {

    const handleAskAudience = () => {
        // Code to handle "Ask the Audience" button click
        console.log("Ask the Audience button clicked");
      };
    
      const handlePhoneFriend = () => {
        // Code to handle "Phone a Friend" button click
        console.log("Phone a Friend button clicked");
      };
    
      const handleFiftyFifty = () => {
        // Code to handle "50:50" button click
        console.log("50:50 button clicked");
      };

    return (
        <div className="container">
            <button id="button1" onClick={handleAskAudience}>
        
                Ask the Audience
            </button>
            <button id="button2" onClick={handlePhoneFriend}>
                Phone a friend
            </button>
            <button id="button3" onClick={handleFiftyFifty}>
                50:50
            </button>
        </div>
    );
};

export default Lifelines