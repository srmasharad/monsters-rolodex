import React, { Component, Suspense, lazy } from 'react';
import LoaderComponent from './common/componentLoader';
import AppJumborton from './jumbortonBanner';

const MonsterCardList = lazy(() => import('../components/common/cardList'));

class MonstersComponent extends Component {
    state = {}
    render() { 
        return ( 
            <React.Fragment>
                <AppJumborton title="Welcome to Monster Rolodex" description="This is a simple hero unit, a simple jumbotron-style component" />
                <Suspense fallback={<LoaderComponent />}>
                    <MonsterCardList />
                </Suspense>
            </React.Fragment>
        );
    }
}
 
export default MonstersComponent;