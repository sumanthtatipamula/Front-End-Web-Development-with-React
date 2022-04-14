import { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	addComment,
	fetchDishes,
	fetchComments,
	fetchPromos,
	postComment,
} from '../redux/ActionCreators';
import About from './AboutComponent';
import { actions } from 'react-redux-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};
const mapDispatchToProps = (dispatch) => ({
	addComment: (dishId, rating, author, comment) =>
		dispatch(addComment(dishId, rating, author, comment)),
	fetchDishes: () => dispatch(fetchDishes()),
	resetFeedbackForm: () => dispatch(actions.reset('feedback')),
	fetchComments: () => dispatch(fetchComments()),
	fetchPromos: () => dispatch(fetchPromos()),
	postComment: (dishId, rating, author, comment) =>
		dispatch(postComment(dishId, rating, author, comment)),
});
class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchComments();
		this.props.fetchPromos();
	}
	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishesErrMess={this.props.dishes.errorMessage}
					promotion={
						this.props.promotions.promotions.filter(
							(promotion) => promotion.featured
						)[0]
					}
					promosLoading={this.props.promotions.isLoading}
					promosErrMess={this.props.promotions.errorMessage}
					leader={
						this.props.leaders.filter((leader) => leader.featured)[0]
					}></Home>
			);
		};
		const DishWithId = ({ match, location, history }) => {
			return (
				<DishDetail
					dish={
						this.props.dishes.dishes.filter((dish) => {
							return dish.id === parseInt(match.params.id, 10);
						})[0]
					}
					isLoading={this.props.dishes.isLoading}
					errMess={this.props.dishes.errorMessage}
					comments={this.props.comments.comments.filter((comment) => {
						return comment.dishId === parseInt(match.params.id, 10);
					})}
					commentsErrMess={this.props.comments.errorMessage}
					postComment={this.props.postComment}></DishDetail>
			);
		};
		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames='page'
						timeout={300}>
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
							<Route
								exact
								path='/contactus'
								component={() => (
									<Contact resetFeedbackForm={this.props.resetFeedbackForm} />
								)}
							/>
							<Redirect to='/home' />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
