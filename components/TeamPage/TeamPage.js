import './TeamPage.css';
import React, {useState, useEffect} from 'react';
import Constants from '../../global_constants/Constants';

/**
 * @returns {React.Component}
 */
const TeamPage = () => {
    let data = require('./team_members.json');

    return <>
        <h1 className="header">Meet the Team</h1>
        <body>
        <ul>
            {data.map(el => (
            <li key={el.id}>{el.name}</li>))}
        </ul>
        {/* <ul>
            {data.map(person => (
                <TeamMember key={person.id} name={person.name}/>
            ))}
        </ul> */}
        </body>
    </>;
}

export default TeamPage;