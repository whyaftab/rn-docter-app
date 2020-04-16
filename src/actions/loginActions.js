import { UPDATE_LOGIN_PROPS } from "./actionType";

export const updateLoginActionProps = (prop, value) => ({
  type: UPDATE_LOGIN_PROPS,
  payload: { prop, value }
});
