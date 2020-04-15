import React from 'react';
import ManagerMessage from './managerMessage/managerMessage';

const managerMessages = props => {
    const messagesToshow = props.messages.map((mes) => {
        return <ManagerMessage message={mes}/>
    })
    return (
        <div>
            {messagesToshow}
        </div>
    );
};

export default managerMessages;