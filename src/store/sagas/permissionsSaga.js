import { put, takeEvery, select, fork } from "redux-saga/effects";
import {
  setDefaultUserPermissions,
  setToggledUser,
  setToggledUserPermissions,
  setUserGroupPermissions,
  updateUserPermissions
} from "./../routines";
import { defaultArray } from "../../common/constants";
import {
  buildUserDefaultPermissions,
  getToggledUserPermissions,
  getToggledUser
} from "../selectors";

const PERMISSIONS_CACHE = {};

const checkPermissionsCache = USER => {
  if (PERMISSIONS_CACHE[USER])
    return { permissions: PERMISSIONS_CACHE[USER], arePermissions: true };
  else {
    return { arePermissions: false };
  }
};

const setPermissionsCache = (USER, PERMISSIONS) => {
  PERMISSIONS_CACHE[USER] = PERMISSIONS;
};

function* updateUserPermissionsSaga({ payload }) {
  const { value, checked } = payload;
  const toggledUser = yield select(getToggledUser);
  const userPermissions = yield select(getToggledUserPermissions);
  let newUserPermissions;
  if (checked) {
    newUserPermissions = [...userPermissions, value];
  } else {
    newUserPermissions = userPermissions.filter(
      permission => permission !== value
    );
  }
  setPermissionsCache(toggledUser, newUserPermissions);
  yield fork(
    setPermissionsHandler,
    ...[{ user: toggledUser, permissions: newUserPermissions }]
  );
}

function* setPermissionsHandler({ permissions, user }) {
  yield put(setToggledUserPermissions.success(permissions));
  yield put(setUserGroupPermissions.success({ user, permissions }));
  yield put(setDefaultUserPermissions(permissions));
}

export function* generateUserPermissionsSaga({ payload }) {
  const { toggledUser } = payload;
  if (toggledUser) {
    const { arePermissions, permissions } = checkPermissionsCache(toggledUser);
    if (!arePermissions) {
      const defaultPermissions = buildUserDefaultPermissions(toggledUser);
      yield fork(
        setPermissionsHandler,
        ...[{ user: toggledUser, permissions: defaultPermissions }]
      );
    } else {
      yield fork(
        setPermissionsHandler,
        ...[{ user: toggledUser, permissions }]
      );
    }
  } else {
    yield fork(
      setPermissionsHandler,
      ...[{ user: toggledUser, permissions: defaultArray }]
    );
  }

  yield put(setToggledUser.success(toggledUser));
}

export function* watchPermissionsSagas() {
  yield takeEvery(setToggledUser.TRIGGER, generateUserPermissionsSaga);
  yield takeEvery(updateUserPermissions.TRIGGER, updateUserPermissionsSaga);
}
