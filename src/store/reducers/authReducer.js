import { defaultArray } from "../../common/constants";
import { setDefaultUserPermissions } from "../routines";

const initialState = {
  currentUser: "RETAIL",
  defaultPermissions: defaultArray
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case setDefaultUserPermissions.TRIGGER:
      return { ...state, defaultPermissions: payload };
    default:
      return state;
  }
}
