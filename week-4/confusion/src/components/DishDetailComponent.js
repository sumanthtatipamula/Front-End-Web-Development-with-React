import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from 'reactstrap';
import { LoadingComponent } from './LoadingComponent';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

function RenderDish({ dish }) {
	return (
		<div className='col-12 col-md-5 m-1'>
			<Card>
				<CardImg width='100%' src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderComments({ comments, addComment, dishId }) {
	const commentsList = comments.map((comment) => {
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
	return (
		<div className='col-12 col-md-5 m-1'>
			<h4>Comments</h4>
			{commentsList}
			<CommentForm dishId={dishId} addComment={addComment} />
		</div>
	);
}

const DishDetail = (props) => {
	if (props.isLoading) {
		return (
			<div className='container'>
				<div className='row'>
					<LoadingComponent />
				</div>
			</div>
		);
	} else if (props.errMess) {
		return (
			<div className='container'>
				<div className='row'>
					<h4>{props.errMess}</h4>
				</div>
			</div>
		);
	}
	if (props.dish == null) return <div></div>;
	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/menu'>Menu</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className='col-12'>
					<h3>{props.dish.name}</h3>
					<hr />
				</div>
			</div>
			<div className='row'>
				<RenderDish dish={props.dish} />
				<RenderComments
					comments={props.comments}
					addComment={props.addComment}
					dishId={props.dish.id}
				/>
			</div>
		</div>
	);
};
export default DishDetail;
