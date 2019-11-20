import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  height: 100%;
  background-color: ${colors.dark};
`;

export const Product = styled.View`
  background-color: #fff;
  border-radius: 7px;
  padding: 20px;
  max-width: 300px;
  max-height: 480px;
  margin: 90px 15px;
`;
export const ImageProduct = styled.Image`
  height: 250px;
  width: 250px;
`;
export const Description = styled.Text`
  overflow: hidden;
  font-size: 20px;
`;
export const Price = styled.Text`
  margin: 10px 0px;
  font-size: 30px;
  font-weight: bold;
`;
export const AddToCart = styled(RectButton)`
  padding: 15px;
  width: 260px;
  border-radius: 7px;
  background-color: ${colors.primary};
  margin: 10px auto;
  margin-top: auto;
  flex-direction: row;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-left: 4px;
  text-transform: uppercase;
`;

export const Amount = styled.Text`
  color: #fff;
  font-size: 18px;
  margin: 0 2px;
`;
