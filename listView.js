import React from 'react';

function ListView(props) {
    return (

        <div>
            <ol>
                {props.data.map(item =>
                    <li>{item.trackName}</li>)}
            </ol>
            <br/>
        </div>
    );
}



export default ListView;

