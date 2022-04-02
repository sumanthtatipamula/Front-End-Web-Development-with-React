import { Component } from 'react';
import { ConfigureStore } from './redux/configureStore';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = ConfigureStore();
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
