import { put, select, fork } from "redux-saga/effects";
import {
  setDefaultUserPermissions,
  setUserGroupList,
  setPermissionTypesList
} from "./../routines";
import { USERGROUPLIST, PERMISSION_TYPES_LIST } from "../../common/constants";
import { getCurrentUser, buildUserDefaultPermissions } from "../selectors";

function* setUserGroupsSaga() {
  yield put(setUserGroupList(USERGROUPLIST));
}

function* setPermissionTypesSaga() {
  yield put(setPermissionTypesList(PERMISSION_TYPES_LIST));
}

function* setCurrentUserPermissions() {
  const currentUser = yield select(getCurrentUser);
  const defaultPermissons = buildUserDefaultPermissions(currentUser);
  yield put(setDefaultUserPermissions(defaultPermissons));
}

export function* startupSaga() {
  yield fork(setCurrentUserPermissions);
  yield fork(setPermissionTypesSaga);
  yield fork(setUserGroupsSaga);
}
