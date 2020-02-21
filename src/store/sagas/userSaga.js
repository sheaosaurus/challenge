import { put, takeEvery } from "redux-saga/effects";

export function* userSaga() {}

export function* watchUserSagas() {
  yield takeEvery("USER", userSaga);
}
