import React from 'react';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import {
  Container,
  Content,
  LogoContainer,
  Logo,
  CartTotalInfo,
  CartTotalItems,
} from './styles';

function Header({ navigation }) {
  const totalItems = useSelector(state => state.cart.data.length);

  function handleToLogoClick() {
    navigation.goBack();
  }

  function handleToCartClick() {
    navigation.navigate('Cart');
  }

  return (
    <Container>
      <Content>
        <LogoContainer onPress={handleToLogoClick}>
          <Logo source={logo} />
        </LogoContainer>

        <CartTotalInfo onPress={handleToCartClick}>
          <MaterialIcons name="shopping-basket" color="#FFF" size={30} />
          <CartTotalItems>{totalItems}</CartTotalItems>
        </CartTotalInfo>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(Header);
