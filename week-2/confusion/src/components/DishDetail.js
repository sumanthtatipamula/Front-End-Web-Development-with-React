import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component {
	constructor(props) {
		super(props);
	}
	fetchComments(dish) {
		return dish.comments.map((comment) => {
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
		});
	}
	render() {
		if (this.props.dish == null) return <div></div>;
		return (
			<div className='row'>
				<Card className='col-md-5 m-1'>
					<CardImg
						width='100%'
						src={this.props.dish.image}
						alt={this.props.dish.name}
					/>
					<CardBody>
						<CardTitle>{this.props.dish.name}</CardTitle>
						<CardText>{this.props.dish.description}</CardText>
					</CardBody>
				</Card>
				<div className='col-md-5  m-1'>
					<h4>Comments</h4>
					{this.fetchComments(this.props.dish)}
				</div>
			</div>
		);
	}
}
export default DishDetail;
