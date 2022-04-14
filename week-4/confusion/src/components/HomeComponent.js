import React from 'react';
import {
	Card,
	CardBody,
	CardImg,
	CardSubtitle,
	CardText,
	CardTitle,
} from 'reactstrap';
import { LoadingComponent } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({ item, isLoading, errMess }) {
	if (isLoading) {
		return <LoadingComponent />;
	} else if (errMess) {
		return <h4>{errMess}</h4>;
	}
	return (
		<FadeTransform
			in
			transformProps={{
				exitTransform: 'scale(0.5) translateY(-50%)',
			}}>
			<Card>
				<CardImg src={baseUrl + item.image} alt={item.name}></CardImg>
				<CardBody>
					<CardTitle>{item.name}</CardTitle>
					{item.designation && <CardSubtitle>{item.designation}</CardSubtitle>}
					<CardText>{item.description}</CardText>
				</CardBody>
			</Card>
		</FadeTransform>
	);
}

const Home = (props) => {
	return (
		<div className='container'>
			<div className='row align-items-start'>
				<div className='col-12 col-md m-1'>
					<RenderCard
						item={props.dish}
						isLoading={props.dishesLoading}
						errMess={props.dishesErrMess}></RenderCard>
				</div>
				<div className='col-12 col-md m-1'>
					<RenderCard
						item={props.promotion}
						isLoading={props.promosLoading}
						errMess={props.promosErrMess}></RenderCard>
				</div>
				<div className='col-12 col-md m-1'>
					<RenderCard
						item={props.leader}
						isLoading={props.leadersLoading}
						errMess={props.leadersErrMess}></RenderCard>
				</div>
			</div>
		</div>
	);
};
export default Home;
