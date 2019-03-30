import React, {useState} from 'react';
import Constants from '../../global_constants/Constants';

/**
 * @returns {React.Component}
 */
const TeamMember = props => {
    return <>
        <li>{props.person.name}</li>
    </>;
}

export default TeamMember;