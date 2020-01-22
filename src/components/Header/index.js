import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import {
  Container,
  Content,
  Logo,
  CartTotalInfo,
  CartTotalItems,
} from './styles';

function Header({ navigation }) {
  function handleToCartClick() {
    navigation.navigate('Cart');
  }
  return (
    <Container>
      <Content>
        <Logo source={logo} />

        <CartTotalInfo onPress={handleToCartClick}>
          <MaterialIcons name="shopping-basket" color="#FFF" size={30} />
          <CartTotalItems>{0}</CartTotalItems>
        </CartTotalInfo>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Header);
