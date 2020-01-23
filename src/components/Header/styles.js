import styled from 'styled-components/native';

import SafeAreaView from '~/components/SafeAreaView';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #201d25;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const LogoContainer = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartTotalInfo = styled.TouchableOpacity`
  position: relative;
`;

export const CartTotalItems = styled.Text`
  position: absolute;
  top: 0;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  padding: 2px;
  border-radius: 9px;
  color: #fff;
  background: #7159c1;
  font-size: 12px;
  text-align: center;
`;
