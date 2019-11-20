import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import tenis from '../../assets/images/tenis.jpg';
import colors from '../../styles/colors';

export const Container = styled.View`
  margin: auto 15px;
  padding: 20px;
  border-radius: 7px;
  background-color: #fff;
  max-height: 90%;
`;
export const ListCart = styled.ScrollView`
  background-color: #fff;
  padding: 20px;
`;
export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const Wrapper = styled.View`
  margin-right: 10px;
`;
export const ImageProduct = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: 10px;
`;

export const Description = styled.Text`
  font-size: 18px;
`;

export const Price = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
`;

export const SubTotalView = styled.View`
  background-color: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const CountView = styled.View`
  flex-direction: row;
`;

export const Amount = styled.TextInput`
  background-color: #fff;
  color: #000;
  padding: 0px 20px;
  text-align: center;
  margin: 0 10px;
`;

export const SubTotal = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const TextTotal = styled.Text`
  color: #999;
  font-weight: bold;
  text-align: center;
  font-size: 22px;
  margin-top: 5px;
`;
export const PriceTotal = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  margin-bottom: 5px;
`;
export const BuyButton = styled(RectButton)`
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 8px;
  margin-top: auto;
`;
export const TextBuyButton = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;
