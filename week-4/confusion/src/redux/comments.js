import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './actiontypes';

export const Comments = (
	state = {
		comments: [],
		errorMessage: null,
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_COMMENTS:
			return {
				...state,
				isLoading: false,
				errorMessage: null,
				comments: action.payload,
			};
		case ActionTypes.ADD_COMMENT:
			var comment = action.payload;
			comment.id = state.comments.length;
			comment.date = new Date().toISOString();
			//state.concat(comment)
			return { ...state, comments: state.comments.concat(comment) };

		case ActionTypes.COMMENTS_FAILED:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				comments: [],
			};
		default:
			return state;
	}
};
