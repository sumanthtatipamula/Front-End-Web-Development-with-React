import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
	return comments.map((comment) => {
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

const DishDetail = (props) => {
	if (props.dish == null) return <div></div>;
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-5 m-1'>
					<RenderDish dish={props.dish} />
				</div>
				<div className='col-md-5  m-1'>
					<h4>Comments</h4>
					<RenderComments comments={props.dish.comments} />
				</div>
			</div>
		</div>
	);
};
export default DishDetail;
