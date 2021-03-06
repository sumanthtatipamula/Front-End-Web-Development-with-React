import React from 'react';
import DishDetail from './DishDetailComponent';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';
class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDish: null,
		};
	}
	onDishSelect(dish) {
		this.setState({ selectedDish: dish });
	}
	render() {
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className='col-12 col-md-5 m-1'>
					<Card onClick={() => this.onDishSelect(dish)}>
						<CardImg width='100%' src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});
		return (
			<div className='container'>
				<div className='row'>{menu}</div>
				<DishDetail dish={this.state.selectedDish} />
			</div>
		);
	}
}

export default MenuComponent;
