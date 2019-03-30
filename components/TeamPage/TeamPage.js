import './TeamPage.css';
import TeamMember from './TeamMember';
import React, {useState, useEffect} from 'react';
import Constants from '../../global_constants/Constants';

/**
 * @returns {React.Component}
 */
const TeamPage = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    let data = require('./team_members.json');
    
    
    // const fetchData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(people => {
    //         setLoadedPeople(people);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    // };

    useEffect(() => {
        //fetchData();
        setTeamMembers(data);
      }, []);

    return <>
        <h1 className="header">Meet the Team</h1>
        <body>
        <ul>
            {console.log(teamMembers)}
            {teamMembers.map(person => {
                return <TeamMember key={person.id} person={person}/>;
            })}
        </ul>
        </body>
    </>;
}

export default TeamPage;