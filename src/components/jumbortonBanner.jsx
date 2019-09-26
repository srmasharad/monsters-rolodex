import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class AppJumborton extends Component {
    state = {  }
    render() { 
        const { title, description } = this.props;
        return (  
            <Jumbotron>
				<h2>{title}</h2>
				<p>{description}</p>
			</Jumbotron>
        );
    }
}
 
export default AppJumborton;