export const GET_LIKE = "GET_LIKE";
export const ADD_LIKE = "ADD_LIKE";
export const DELETE_LIKE = "DELETE_LIKE"

export const getLikes = () => {
  return dispatch => {
    const res = window.localStorage.movies
          ? window.localStorage.movies.split(",")
          : [];
    return dispatch({type: GET_LIKE, payload: res});
  };
};

export const addLike = (id) => {
  return dispatch => {
      let storedData = window.localStorage.movies
          ? window.localStorage.movies.split(",")
          : [];

      if (!storedData.includes(id.toString())) {
          storedData.push(id);
          window.localStorage.movies = storedData;
      }
    return dispatch({type: ADD_LIKE, payload: id});
  };
};

export const deleteLike = (id) => {
    return dispatch => {
        let storedData = window.localStorage.movies.split(",");
        window.localStorage.movies = storedData.filter((like) => like != id);
        return dispatch({type: DELETE_LIKE, payload: id})
    }
}




