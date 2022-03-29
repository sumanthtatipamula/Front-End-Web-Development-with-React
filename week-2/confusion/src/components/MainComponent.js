import { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
		};
	}
	render() {
		const HomePage = () => {
			return <Home></Home>;
		};
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route
						exact
						path='/menu'
						component={() => (
							<MenuComponent dishes={this.state.dishes}></MenuComponent>
						)}
					/>
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
