import React, {useState} from 'react';
import Constants from '../../global_constants/Constants';

/**
 * @returns {React.Component}
 */
const TeamMember = props => {
    return <>
        <div className="person">
            <section className="image"></section>
            <section className="person-name">{props.person.name}</section>
        </div>
    </>;
}

export default TeamMember;