import { setPermissionTypesList, setToggledUserPermissions } from "../routines";
import { defaultArray } from "../../common/constants";

const initialState = {
  permissionsTypesList: defaultArray,
  toggledUserPermissions: defaultArray
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case setPermissionTypesList.TRIGGER:
      return { ...state, permissionsTypesList: payload };
    case setToggledUserPermissions.SUCCESS:
      return { ...state, toggledUserPermissions: payload };
    default:
      return state;
  }
}
