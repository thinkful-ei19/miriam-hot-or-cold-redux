import React from 'react';

import './guess-form.css';

function GuessForm(props) {

    return (
         <form onSubmit={(event) => {
            event.preventDefault()
                
            let inputValue = event.target.userGuess.value         
            props.addToList(inputValue)
             
            event.target.userGuess.value=''
        }}>
            <input  type="number"
                    name="userGuess" 
                    id="userGuess"
                    className="text" 
                    min="1"
                    max="100"
                    autoComplete="off"
                    placeholder="Enter your Guess" 
                    required />

            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
        
    );
};
export default GuessForm
