import styled from 'styled-components/native';

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
`;
export const Details = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const Remove = styled.TouchableOpacity`
  padding: 6px;
`;

export const Title = styled.Text``;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  background: #eee;
`;

export const ControlButton = styled.TouchableOpacity``;

export const Amount = styled.TextInput.attrs({
  readonly: true,
})`
  min-width: 52px;
  margin: 0 5px;
  padding: 2.5px 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;

export const Subtotal = styled.Text`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
`;
