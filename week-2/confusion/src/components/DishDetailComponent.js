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
						{new Intl.DateTimeFormat('en-US', {
							year: 'numeric',
							month: 'short',
							day: '2-digit',
						}).format(new Date(Date.parse(comment.date)))}
					</li>
				</ul>
			);
		});
	}
	render() {
		if (this.props.dish == null) return <div></div>;
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-5 m-1'>
						<Card>
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
					</div>
					<div className='col-md-5  m-1'>
						<h4>Comments</h4>
						{this.fetchComments(this.props.dish)}
					</div>
				</div>
			</div>
		);
	}
}
export default DishDetail;
