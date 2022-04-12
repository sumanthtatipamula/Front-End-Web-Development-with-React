import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component {
	renderComments(comments) {
		if (comments == null) return <div></div>;
		return (
			<div className='col-12 col-md-5  m-1'>
				<h4>Comments</h4>
				{comments.map((comment) => {
					return (
						<ul key={comment.id} className='list-unstyled'>
							<li>{comment.comment}</li>
							<li>
								-- {comment.author}
								{', '}
								{new Date(comment.date).toLocaleString('en-us', {
									year: 'numeric',
									month: 'short',
									day: 'numeric',
								})}
							</li>
						</ul>
					);
				})}
			</div>
		);
	}
	renderDish(dish) {
		return (
			<Card>
				<CardImg width='100%' src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}
	render() {
		if (this.props.dish == null) return <div></div>;
		return (
			<div className='row'>
				<div className='col-12 col-md-5 m-1'>
					{this.renderDish(this.props.dish)}
				</div>
				{this.renderComments(this.props.dish.comments)}
			</div>
		);
	}
}
export default DishDetail;
