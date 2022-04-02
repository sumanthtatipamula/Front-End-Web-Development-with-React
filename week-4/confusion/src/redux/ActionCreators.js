import * as ActionTypes from './actiontypes';

export const addComment = (dishId, rating, author, comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId,
		rating,
		author,
		comment,
	},
});
