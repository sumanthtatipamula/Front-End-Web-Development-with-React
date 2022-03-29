import { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null,
		};
	}
	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId });
	}
	render() {
		return (
			<div>
				<Header />
				<MenuComponent
					dishes={this.state.dishes}
					onClick={(dishId) => this.onDishSelect(dishId)}
				/>
				<DishDetail
					dish={
						this.state.dishes.filter((dish) => {
							return dish.id === this.state.selectedDish;
						})[0]
					}
				/>
				<Footer />
			</div>
		);
	}
}

export default Main;
