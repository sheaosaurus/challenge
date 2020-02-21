import {
  setPermissionTypesList,
  setToggledUserPermissions,
  setToggledUser
} from "../routines";
import { defaultArray, defaultString } from "../../common/constants";

const initialState = {
  permissionsTypesList: defaultArray,
  toggledUserPermissions: defaultArray
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log("action", action);
  switch (type) {
    case setPermissionTypesList.TRIGGER:
      return { ...state, permissionsTypesList: payload };
    case setToggledUserPermissions.SUCCESS:
      return { ...state, toggledUserPermissions: payload };
    default:
      return state;
  }
}
