import { UPDATE_LOGIN_PROPS } from "../actions/actionType";

const init_state = {
  username: "",
  password: "",
  errors: {},
  loading: false
};

export default (state = init_state, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_PROPS:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
