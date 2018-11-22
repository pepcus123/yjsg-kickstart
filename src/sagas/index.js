import { takeLatest } from 'redux-saga/effects';
import { testAPISaga } from './testSaga';

const sagas = [
  takeLatest('FETCH_TEST_API_DATA', testAPISaga),
  //takeLatest('GET_MEMBER', testSaga2),
];

export default sagas;
