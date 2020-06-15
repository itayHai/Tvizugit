import React from 'react';

const DateHandler = props => {
    let currDate = new Date(props.date)
    var dd = String(currDate.getDate()).padStart(2, '0');
    var mm = String(currDate.getMonth() + 1).padStart(2, '0');
    var yyyy = currDate.getFullYear();

    const today = dd + '/' + mm + '/' + yyyy;
    return (
        <div>{ today }</div>
    );
};


export default DateHandler;