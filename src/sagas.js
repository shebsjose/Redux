import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./action";

function usersFetch() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}

function* workGetUserFetch() {
  const users = yield call(usersFetch);
  yield put({
    type: GET_USERS_SUCCESS,
    users,
  });
}

// function* mySaga() {
//    yield takeEvery(GET_USERS_FETCH, workGetUserFetch);
//  }

// function* mySaga() {
//     yield takeLatest(GET_USERS_FETCH, workGetUserFetch);
// }

// ---------------------------------------------------------------------------------------
// Error Handing.
function* mySaga() {
  try {
    const users = yield call(usersFetch);
    yield put({
      type: "GET_USERS_SUCCESS",
      users,
    });
  } catch (error) {
    yield put({
      type: "PRODUCTS_REQUEST_FAILED",
      error,
    });
  }
  yield takeLatest(GET_USERS_FETCH, workGetUserFetch);
}
// ---------------------------------------------------------------------------------------

export default mySaga;
