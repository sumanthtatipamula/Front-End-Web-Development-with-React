import React, { Component } from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Modal,
	ModalHeader,
	ModalBody,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// NavLink keeps NavItem active based on current route.

class Header extends Component {
	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
	}
	toggleNav() {
		this.setState((state) => ({ ...state, isNavOpen: !state.isNavOpen }));
	}
	toggleModal() {
		this.setState((state) => ({ isModalOpen: !this.state.isModalOpen }));
	}
	handleLogin(event) {
		this.toggleModal();
		alert(
			'Username: ' +
				this.username.value +
				' Password: ' +
				this.password.value +
				' Remember: ' +
				this.remember.checked
		);
		event.preventDefault();
	}
	render() {
		const LoginModal = (props) => {
			return (
				<Modal {...props}>
					<ModalHeader toggle={props.toggle}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor='username'>Username</Label>
								<Input
									type='text'
									id='username'
									name='username'
									innerRef={(input) => (this.username = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='password'>Password</Label>
								<Input
									type='password'
									id='password'
									name='password'
									innerRef={(input) => (this.password = input)}
								/>
							</FormGroup>
							<FormGroup check>
								<Label check>
									<Input
										type='checkbox'
										name='remember'
										innerRef={(input) => (this.remember = input)}
									/>
									Remember me
								</Label>
							</FormGroup>
							<Button type='submit' value='submit' color='primary'>
								Login
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			);
		};
		return (
			<React.Fragment>
				<Navbar dark expand='md'>
					<div className='container'>
						<NavbarToggler onClick={this.toggleNav}></NavbarToggler>
						<NavbarBrand className='mr-auto' href='/'>
							<img src='assets/images/logo.png' height='30' width='41' />
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className='nav-link' to='/home'>
										<span className='fa fa-home fa-lg'></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/aboutus'>
										<span className='fa fa-info fa-lg'></span> About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/menu'>
										<span className='fa fa-list fa-lg'></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/contactus'>
										<span className='fa fa-address-card fa-lg'></span> Contact
										Us
									</NavLink>
								</NavItem>
							</Nav>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<Button onClick={this.toggleModal}>
										<span className='fa fa-sign-in fa-lg'></span> Login
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<h1>Ristorante Con Fusion</h1>
								<p>
									We take inspiration from the World's best cuisines, and create
									a unique fusion experience. Our lipsmacking creations will
									tickle your culinary senses!
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
				<LoginModal
					isOpen={this.state.isModalOpen}
					toggle={this.toggleModal}></LoginModal>
			</React.Fragment>
		);
	}
}

export default Header;