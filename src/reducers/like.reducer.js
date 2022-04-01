import {ADD_LIKE, DELETE_LIKE, GET_LIKE} from "../actions/like.action";

const initialState = {}

export default function likeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIKE:
      return action.payload;
    case ADD_LIKE:
      return [action.payload, ...state];
    case DELETE_LIKE:
      return state.filter(like => like != action.payload);
    default:
      return state;
  }
}
