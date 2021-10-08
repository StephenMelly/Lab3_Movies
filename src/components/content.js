import React from 'react';

//exporting class, needs to be referenced in app.js to be used elsewhere
export class Content extends React.Component {

    render() {
        //return a h1 to clarify what the component is
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}