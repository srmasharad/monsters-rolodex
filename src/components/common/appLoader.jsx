import React from 'react';
import { Spinner } from 'react-bootstrap';

const PageLoader = () => {
    return (
        <div className="app-loaderContent">
            <div className="spinnerWrapper">
                <h6>Monster Rolodex</h6>
                <Spinner animation="border" variant="light" size="sm"/>
            </div>
        </div>
    );
}
 
export default PageLoader;