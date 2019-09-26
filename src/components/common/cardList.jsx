import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Alert } from 'react-bootstrap';
import SearchBar from './searchBar';

class MonsterCard extends Component {
    state = {  
        monsterData: [],
        searchField: '',
        alertMessage:  false
    }

    async componentDidMount(){
        try{
            const data = await fetch('https://jsonplaceholder.typicode.com/posts');
            const monsterData = await data.json();
           this.setState({ monsterData, alertMessage: true });
        }

        catch(ex){
            console.log(ex);
        }
        
    }
    
    handleSearchChange = (e) => {
        const searchField = e.target.value;

        this.setState({ searchField })
    }

    render() { 
        const { monsterData, searchField, alertMessage } = this.state; 
        const filterMonsters = monsterData.filter(monster => monster.title.toLowerCase().includes(searchField.toLowerCase()));               

        return (
            <>  
                <p>{monsterData.length} monsters are in the Database.</p>
                <SearchBar onSearchChange={this.handleSearchChange} />
                {filterMonsters.length === 0  && alertMessage && <Alert variant="danger">
                    Sorry! No such monster founds in a list.
                </Alert>}
                <Row>
                    {filterMonsters.map(monster =>
                        <Col sm={3} key={monster.id}>
                            <Card className="monsterCard">
                                <Card.Img variant="top" src={`https://robohash.org/${monster.id}?set=set2`} alt={`monster_img_${monster.id}`}/>
                                <Card.Body>
                                    <Card.Title>{`${monster.title.substr(0, 20)}...`}</Card.Title>
                                    <Card.Text>
                                        {`${monster.body.substr(0, 60)}...`}
                                    </Card.Text>
                                    <Link to={`/monsters/${monster.id}`} className="btn btn-primary btn-sm">Read More</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </> 
        );
    }
}
 
export default MonsterCard;