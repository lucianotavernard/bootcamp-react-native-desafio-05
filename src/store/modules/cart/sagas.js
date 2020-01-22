import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ payload }) {
  try {
    const { id } = payload;

    const productExists = yield select(state =>
      state.cart.data.find(product => product.id === id)
    );

    const stock = yield call(api.get, `stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
      Alert.alert('Erro', 'Quantidade solicitada fora do estoque!');
      return;
    }

    if (productExists) {
      yield put(updateAmountSuccess(id, amount));
      return;
    }

    const response = yield call(api.get, `products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: response.data.price,
    };

    yield put(addToCartSuccess(data));
  } catch (error) {
    Alert.alert('Erro', 'Ocorreu algum erro ao adicionar item ao carrinho.');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Erro', 'Quantidade solicitada fora do estoque!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
