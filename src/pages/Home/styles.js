import styled from 'styled-components/native';
import { darken } from 'polished';

import SafeAreaView from '~/components/SafeAreaView';

export const Container = styled(SafeAreaView)`
  background: #201d25;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 60,
  },
})``;

export const Product = styled.View`
  width: 220px;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const Price = styled.Text`
  margin: auto 0px 14px;
  font-size: 20px;
  font-weight: bold;
`;

export const AmountContent = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 50px;
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.04, '#7159c1')};
`;

export const AmountText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: stretch;
  height: 44px;
  border-radius: 4px;
  background: #7159c1;
`;

export const ButtonText = styled.Text`
  flex: 1;
  align-self: center;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
