import { PROMOTIONS } from '../shared/promotions';
import * as ActionTypes from './actiontypes';

const INITIAL_STATE = {
	isLoading: true,
	errorMessage: null,
	promotions: [],
};

export const Promotions = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.ADD_PROMOS:
			return {
				...state,
				isLoading: false,
				errorMessage: null,
				promotions: action.payload,
			};
		case ActionTypes.PROMOS_LOADING:
			return { ...state, isLoading: true, errorMessage: null, promotions: [] };
		case ActionTypes.PROMOS_FAILED:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				promos: [],
			};
		default:
			return state;
	}
};
