import React from 'react';

//exporting class, needs to be referenced in app.js
export class Footer extends React.Component{

    render(){
        //return a h1 to clarify what the component is
        return(
            <div>
                <h1>This is the footer component</h1>
            </div>
        );
    }
}