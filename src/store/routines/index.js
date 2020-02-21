import { createRoutine } from "redux-saga-routines";

/* SET ROUTINES */
export const setUserGroupList = createRoutine("SET_USER_GROUP_LIST");
export const setPermissionTypesList = createRoutine("SET_PERMISSION_TYPE_LIST");
export const setToggledUser = createRoutine("SET_TOGGLED_USER");
export const setToggledUserPermissions = createRoutine(
  "SET_TOGGLED_USER_PERMISSION"
);
export const setUserGroupPermissions = createRoutine(
  "SET_USER_GROUP_PERMISSION"
);
export const setDefaultUserPermissions = createRoutine(
  "SET_DEFAULT_USER_PERMISSIONS"
);
export const updateUserPermissions = createRoutine("UPDATE_USER_PERMISSIONS");

/* GENERATE DATA ROUTINES */
export const generateUserPermissions = createRoutine(
  "GENERATE_USER_PERMISSIONS"
);
