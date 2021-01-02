import React, {useState} from 'react';

const Series = (props) => {
    return(
        <div>
            <li> {props.name} - {props.price}</li>
        </div>
    );
}
export default Series;