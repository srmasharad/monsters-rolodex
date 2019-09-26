import React from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearchChange}) => {
    return (
        <div className="sticky-top">
            <Form.Group>
                <FormControl type="text" placeholder="Search monsters..." onChange={onSearchChange} />
            </Form.Group>
        </div>
    );
}
 
export default SearchBar;