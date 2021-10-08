import React from 'react';

//exporting class, needs to be referenced in app.js
export class Header extends React.Component{

    render(){
        //return a h1 to clarify what the component is
        return(
            <div>
                <h1>This is the header component</h1>
            </div>
        );
    }
}