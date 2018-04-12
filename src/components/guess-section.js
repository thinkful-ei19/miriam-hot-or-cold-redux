import React from 'react';
import GuessForm from './guess-form';

import './guess-section.css';

function GuessSection(props) {
    return (
        <section>
             <h2 id="feedback">{props.feedback}</h2>
            <GuessForm addToList={(guess) => props.addToList(guess)}/>
        </section>
    );
};
export default GuessSection