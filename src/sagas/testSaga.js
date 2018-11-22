import { put } from 'redux-saga/effects';
import { testAPI } from './../apis/testAPI';
import { setTestAPIResponseAction } from './../actions';

export function* testAPISaga(action) {
  try {
    const resp = yield testAPI(action.url);

    yield put(setTestAPIResponseAction(resp));
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}
