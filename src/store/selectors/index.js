import {
  defaultString,
  defaultArray,
  DEFAULT_PERMISSIONS
} from "./../../common/constants";

export const buildUserDefaultPermissions = toggledUser =>
  DEFAULT_PERMISSIONS?.[toggledUser] ?? defaultArray;

export const getCurrentUser = state =>
  state?.auth?.currentUser ?? defaultString;
export const getUserGroupList = state =>
  state?.users?.userGroupList ?? defaultArray;
export const getToggledUser = state =>
  state?.users?.toggledUser ?? defaultArray;
export const getPermissionTypesList = state =>
  state?.permissions?.permissionsTypesList ?? defaultArray;
export const getToggledUserPermissions = state =>
  state?.permissions?.toggledUserPermissions ?? defaultArray;

/* Auth Selectors */
export const getDefualtUserPermissions = state =>
  state?.auth?.defaultPermissions ?? defaultArray;

/* Render Order Selectors */
export const getDefaultRenderedOrder = state =>
  state?.renderOrder?.defaultOrder ?? defaultArray;
export const getOverridenRenderedOrder = state =>
  state?.renderOrder?.overriddenOrder ?? defaultArray;

/* User Selectors */
export const getCurrentUserPermissions = (state, currentUser) =>
  state?.users?.userGroupPermissions?.[currentUser] ?? defaultArray;
