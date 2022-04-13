/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Button, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { LocalForm } from 'react-redux-form';
import { Control } from 'react-redux-form';
import { Errors } from 'react-redux-form';

const required = (value) => value && value.length;
const minLength = (len) => (value) => value && value.length >= len;
const maxLength = (len) => (value) => !value || value.length <= len;
class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.formSubmitHandler = this.formSubmitHandler.bind(this);
		this.state = {
			isModalOpen: false,
		};
	}
	toggleModal() {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	}
	formSubmitHandler(values) {
		this.toggleModal();
		this.props.postComment(
			this.props.dishId,
			values.rating,
			values.author,
			values.comment
		);
	}
	render() {
		const CommentFormModal = () => {
			return (
				<Modal isOpen={this.state.isModalOpen}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm
							onSubmit={(values) => {
								this.formSubmitHandler(values);
							}}>
							<Row className='form-group m-1'>
								<Label htmlFor='rating'>Rating</Label>
								<Control.select
									model='.rating'
									id='rating'
									name='rating'
									className='form-control'>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Control.select>
							</Row>
							<Row className='form-group m-1'>
								<Label htmlFor='author'>Your Name</Label>
								<Control.text
									model='.author'
									id='author'
									name='author'
									className='form-control'
									validators={{
										maxLength: maxLength(15),
										minLength: minLength(2),
									}}
								/>
								<Errors
									className='text-danger'
									model='.author'
									messages={{
										required: 'Required',
										minLength: 'Must be greater than 2 characters',
										maxLength: 'Must be 15 characters or less',
									}}
									show='touched'></Errors>
							</Row>
							<Row className='form-group m-1'>
								<Label htmlFor='comment'>Comment</Label>
								<Control.textarea
									model='.comment'
									id='comment'
									name='comment'
									className='form-control'
									rows='6'
								/>
							</Row>
							<Button color='primary' className='m-1' type='submit'>
								Submit
							</Button>
						</LocalForm>
					</ModalBody>
				</Modal>
			);
		};
		return (
			<>
				<Button outline onClick={this.toggleModal}>
					<span className='fa fa-pencil'></span> Submit Comment
				</Button>
				<CommentFormModal />
			</>
		);
	}
}

export default CommentForm;
