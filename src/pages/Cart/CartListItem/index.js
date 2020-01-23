import React from 'react';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import {
  updateAmountRequest,
  removeFromCart,
} from '~/store/modules/cart/actions';

import {
  Info,
  Image,
  Details,
  Remove,
  Title,
  Price,
  Controls,
  ControlButton,
  Amount,
  Subtotal,
} from './styles';

export default function CartListItem({ item }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <>
      <Info>
        <Image source={{ uri: item.image }} />

        <Details>
          <Title>{item.title}</Title>
          <Price>{item.priceFormatted}</Price>
        </Details>

        <Remove onPress={() => handleRemoveFromCart(item.id)}>
          <MaterialIcons name="delete-forever" size={24} color="#7159c1" />
        </Remove>
      </Info>

      <Controls>
        <ControlButton onPress={() => decrement(item)}>
          <MaterialIcons
            name="remove-circle-outline"
            size={20}
            color="#7159c1"
          />
        </ControlButton>

        <Amount value={String(item.amount)} />

        <ControlButton onPress={() => increment(item)}>
          <MaterialIcons name="add-circle-outline" size={20} color="#7159c1" />
        </ControlButton>

        <Subtotal>{item.subtotal}</Subtotal>
      </Controls>
    </>
  );
}

CartListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    priceFormatted: PropTypes.string,
    amount: PropTypes.number,
    subtotal: PropTypes.string,
  }).isRequired,
};
