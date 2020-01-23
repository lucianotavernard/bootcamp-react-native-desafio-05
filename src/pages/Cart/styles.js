import styled, { css } from 'styled-components/native';

import SafeAreaView from '~/components/SafeAreaView';

export const Container = styled(SafeAreaView)`
  margin-top: 80px;
  padding: 20px;
  background: #201d25;

  ${({ hasFlexOne }) =>
    hasFlexOne &&
    css`
      flex: 1;
    `}
`;

export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 15px;
  border-radius: 4px;
  background: #fff;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;

  ${({ hasManeyItemsInCart }) =>
    hasManeyItemsInCart &&
    css`
      padding-bottom: 30px;
    `}
`;

export const TotalText = styled.Text`
  color: #999;
  font-weight: bold;
  text-align: center;
`;

export const TotalAmount = styled.Text`
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonFinish = styled.TouchableOpacity`
  height: 44px;
  padding: 12px;
  border-radius: 4px;
  background: #7159c1;
`;

export const ButtonFinishText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  flex: 0.7;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
