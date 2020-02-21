import {
  setUserGroupList,
  setToggledUser,
  setUserGroupPermissions
} from "../routines/index";
import {
  defaultString,
  defaultArray,
  defaultObject
} from "../../common/constants";

const initialState = {
  userGroupList: defaultArray,
  userGroupPermissions: defaultObject,
  toggledUser: defaultString
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  const { user, permissions } = payload || {};
  switch (type) {
    case setUserGroupList.TRIGGER:
      return { ...state, userGroupList: payload };
    case setUserGroupPermissions.SUCCESS:
      return {
        ...state,
        userGroupPermissions: {
          ...state.userGroupPermissions,
          [user]: permissions
        }
      };
    case setToggledUser.SUCCESS:
      return { ...state, toggledUser: payload };
    default:
      return state;
  }
}
