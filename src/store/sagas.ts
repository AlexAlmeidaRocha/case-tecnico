import { call, put, takeEvery } from "redux-saga/effects";
import type { User } from "./user.interfaces";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./usersSlice";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsersApi(): Promise<User[]> {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }
  return response.json();
}

function* fetchUsersSaga() {
  try {
    const users: User[] = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure((error as Error).message));
  }
}

export function* usersSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsersSaga);
}
