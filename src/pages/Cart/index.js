import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { formatPrice } from '~/util/format';

import CartListItem from './CartListItem';

import {
  Container,
  CartList,
  TotalContainer,
  TotalAmount,
  TotalText,
  ButtonFinish,
  ButtonFinishText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const cartItems = useSelector(state =>
    state.cart.data.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price),
    }))
  );

  const hasItemsInCart = useMemo(() => cartItems.length > 0, [cartItems]);
  const hasManeyItemsInCart = useMemo(() => cartItems.length > 3, [cartItems]);

  const totalFormatted = useMemo(() => {
    const total = cartItems.reduce(
      (accu, curr) => accu + curr.price * curr.amount,
      0
    );

    return formatPrice(total);
  }, [cartItems]);

  return (
    <Container hasFlexOne={!hasItemsInCart}>
      {!hasItemsInCart && (
        <EmptyContainer>
          <EmptyText>Desculpe, não há itens no carrinho. :(</EmptyText>
        </EmptyContainer>
      )}

      {hasItemsInCart && (
        <CartList
          data={cartItems}
          keyExtractor={product => String(product.id)}
          ListFooterComponent={() => (
            <TotalContainer hasManeyItemsInCart={hasManeyItemsInCart}>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{totalFormatted}</TotalAmount>

              <ButtonFinish>
                <ButtonFinishText>Finalizar Pedido</ButtonFinishText>
              </ButtonFinish>
            </TotalContainer>
          )}
          renderItem={({ item: cartItem }) => <CartListItem item={cartItem} />}
        />
      )}
    </Container>
  );
}
