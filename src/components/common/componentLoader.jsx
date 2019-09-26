import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoaderComponent = () => {
    return ( 
        <div className="componentLoader">
            <Spinner animation="border" variant="success" />
        </div>
    );
}
 
export default LoaderComponent;