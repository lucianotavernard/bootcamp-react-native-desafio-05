import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { formatPrice } from '~/util/format';

import api from '~/services/api';
import { addToCartRequest } from '~/store/modules/cart/actions';

import {
  Container,
  ProductList,
  Product,
  Image,
  Title,
  Price,
  AmountContent,
  AmountText,
  Button,
  ButtonText,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();

  const amounts = useSelector(state =>
    state.cart.data.reduce(
      (accu, curr) => ({
        ...accu,
        [curr.id]: curr.amount || 0,
      }),
      {}
    )
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item: product }) => (
          <Product key={product.id}>
            <Image source={{ uri: product.image }} />

            <Title>{product.title}</Title>

            <Price>{product.priceFormatted}</Price>

            <Button onPress={() => handleAddToCart(product.id)}>
              <AmountContent>
                <MaterialIcons
                  name="add-shopping-cart"
                  size={15}
                  color="#FFF"
                />

                <AmountText>{amounts[product.id] || 0}</AmountText>
              </AmountContent>

              <ButtonText>Adicionar</ButtonText>
            </Button>
          </Product>
        )}
      />
    </Container>
  );
}
