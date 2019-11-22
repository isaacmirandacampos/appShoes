import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import {
  addToCartSuccess,
  UpdateAmountSuccess,
  UpdateAmountRequest,
} from './actions';
import formatPrice from '../../../util/format';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const currentAmount = productExist ? productExist.amount : 0;

  const amount = currentAmount + 1;

  if (productExist) {
    yield put(UpdateAmountRequest(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  if (amount > stockAmount) {
    return Alert.alert('Quantidade solicitada fora de estoque.');
  }

  if (amount >= 1) {
    yield put(UpdateAmountSuccess(id, amount));
  }
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
