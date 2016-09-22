import React from 'react';
import './error.less';


export default class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
           <div className="error-position">
               <h3 className="error-title">Error</h3>
               <p className="error-content">{this.props.location.query.errorMessage}</p>
           </div>
        )
    }
}