import { all } from 'redux-saga/effects';
import pokeSaga from './Pokemons';

export default function* rootSaga(getState) {
  yield all([
    pokeSaga(),
  ]);
}
