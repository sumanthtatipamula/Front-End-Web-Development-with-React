import { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS,
		};
	}
	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.state.dishes.filter((dish) => dish.featured)[0]}
					promotion={
						this.state.promotions.filter((promotion) => promotion.featured)[0]
					}
					leader={
						this.state.leaders.filter((leader) => leader.featured)[0]
					}></Home>
			);
		};
		const DishWithId = ({ match, location, history }) => {
			return (
				<DishDetail
					dish={
						this.state.dishes.filter((dish) => {
							return dish.id === parseInt(match.params.id, 10);
						})[0]
					}
					comments={this.state.comments.filter((comment) => {
						return comment.dishId === parseInt(match.params.id, 10);
					})}></DishDetail>
			);
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
					<Route path='/menu/:id' component={DishWithId} />
					<Route exact path='/contactus' component={Contact} />
					<Redirect to='/home' />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
