import React, {lazy, Suspense, Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/navBar';
import './App.css';
import PageLoader from './components/common/appLoader';

const SignUpForm = lazy(() => import('./components/signUp'));
const Logout = lazy(() => import('./components/logout'));
const LoginComponent =  lazy(() => import('./components/login'))
const MonsterDetailView = lazy(() => import('./components/monsterDetailView'));
const MonstersComponent = lazy(() => import('./components/monsters'));
const AboutComponent = lazy(() => import('./components/about'));
const PageNotFound = lazy(() => import('./components/pageNotFound'));


class App extends Component {
	state = {}

	componentDidMount(){
		const user = localStorage.getItem('token');
		this.setState({ user })
	}

	render(){
		const { user } = this.state;
		return (
			<React.Fragment>
				<Header title="Monster Rolodex" user={user}/>
				<main className="site-main">
					<Container fluid>
						<Suspense fallback={<PageLoader />}>
							<Switch>
								<Route path="/signup" component={SignUpForm} />
								<Route path="/logout" component={Logout} />
								<Route path="/login" component={LoginComponent} />
								<Route path="/monsters/:id" component={MonsterDetailView} />
								<Route path="/" exact component={MonstersComponent} />
								<Route path="/about" component={AboutComponent} />
								<Route path="/pagenotfound" component={PageNotFound}/>
								<Redirect to="/pagenotfound" />
							</Switch>
						</Suspense>
					</Container>
				</main>
			</React.Fragment>
		)
	}
}

export default App;
