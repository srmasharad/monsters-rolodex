import React, { Component } from 'react';

class MonsterDetailView extends Component {
    state = { 
        monsterDetail: {}
    }

    async componentDidMount(){
        const cardId = this.props.match.params.id;
        try{
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${cardId}`);
            const monsterDetail = await data.json();            
            
            this.setState({ monsterDetail });
        }

        catch(ex){
            console.log(ex);
        }
        
    }
    render() {
        const { monsterDetail } = this.state;        

        return ( 
            <React.Fragment>
                <div className="monsterDetaiView-Wrap">
                    <img src={`https://robohash.org/${monsterDetail.id}?set=set2`} alt={`monster_img_${monsterDetail.id}`} />
                    <h3>{monsterDetail.title}</h3>
                    <p>{monsterDetail.body}</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MonsterDetailView;