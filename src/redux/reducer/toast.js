
import { ADD_TOAST, REMOVE_TOAST } from "../actions/actionsTypes";

const toastsReducer = (state = [], action) => {

  switch (action.type) {
    case ADD_TOAST:
      return [...state, action.toast];

    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== action.id);

    default:
      return state;
  }
}

export default toastsReducer;