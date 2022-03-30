import { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutComponent';

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};
class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.filter((dish) => dish.featured)[0]}
					promotion={
						this.props.promotions.filter((promotion) => promotion.featured)[0]
					}
					leader={
						this.props.leaders.filter((leader) => leader.featured)[0]
					}></Home>
			);
		};
		const DishWithId = ({ match, location, history }) => {
			return (
				<DishDetail
					dish={
						this.props.dishes.filter((dish) => {
							return dish.id === parseInt(match.params.id, 10);
						})[0]
					}
					comments={this.props.comments.filter((comment) => {
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
						path='/aboutus'
						component={() => {
							return <About leaders={this.props.leaders} />;
						}}
					/>
					<Route
						exact
						path='/menu'
						component={() => (
							<MenuComponent dishes={this.props.dishes}></MenuComponent>
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

export default withRouter(connect(mapStateToProps)(Main));
