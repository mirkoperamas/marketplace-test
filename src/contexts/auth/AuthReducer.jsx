import { TO_LOGIN, TO_LOGOUT } from "./types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case TO_LOGIN:
      return {
        ...state,
        auth: payload,
      };
    case TO_LOGOUT:
      return {
        ...state,
        auth: payload,
      };
    default:
      return state;
  }
};
