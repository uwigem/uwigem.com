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
            <div className="teams">
                <seciton className="col-xs">
                    Adviser
                </seciton>
                <seciton className="col-xs">
                    All
                </seciton>
                <seciton className="col-xs">
                    Business
                </seciton>
                <seciton className="col-xs">
                    Collaborations
                </seciton>
                <seciton className="col-xs">
                    Design
                </seciton>
                <seciton className="col-xs">
                    Drylab
                </seciton>
                <seciton className="col-xs">
                    Leadership
                </seciton>
                <seciton className="col-xs">
                    Outreach
                </seciton>
                <seciton className="col-xs">
                    PI
                </seciton>
                <seciton className="col-xs">
                    Presenters
                </seciton>
                <seciton className="col-xs">
                    Wetlab
                </seciton>
            </div>
            <div className="team-members">
                {console.log(teamMembers)}
                {teamMembers.map(person => {
                    return <TeamMember key={person.id} person={person}/>;
                })}
            </div>
        </body>
    </>;
}

export default TeamPage;