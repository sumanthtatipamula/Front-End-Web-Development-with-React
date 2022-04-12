import * as ActionTypes from './actiontypes';
const INITIAL_STATE = {
	isLoading: true,
	errorMessage: null,
	dishes: [],
};
export const Dishes = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.ADD_DISHES:
		case ActionTypes.DISHES_LOADING:
			return { ...state, isLoading: true, errorMessage: null, dishes: [] };
		case ActionTypes.DISHES_FAILED:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				dishes: [],
			};
		default:
			return state;
	}
};
