import { fork } from "redux-saga/effects";
import { startupSaga } from "./startupSaga";
import { watchPermissionsSagas } from "./permissionsSaga";
import { watchUserSagas } from "./userSaga";

export default function* rootSaga() {
  yield fork(startupSaga);
  yield fork(watchPermissionsSagas);
  yield fork(watchUserSagas);
  // code after fork-effect
}
