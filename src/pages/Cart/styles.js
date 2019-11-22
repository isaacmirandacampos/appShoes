import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../styles/colors';

export const CartEmpty = styled.View`
  background-color: #fff;
  height: 70%;
  width: 90%;
  border-radius: 8px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${hp('10%')};
  right: ${wp('5%')};
`;

export const BackToHome = styled.TouchableOpacity`
  margin-top: auto;
  background-color: ${colors.primary};
  padding: 10px 20px;
  width: 80%;
  border-radius: 7px;
`;

export const TextBack = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Container = styled.View`
  margin: auto;
  border-radius: 8px;
  background-color: #fff;
  height: 80%;
  width: 85%;
  padding: 15px;
`;
export const ListCart = styled.ScrollView`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
export const WrapperProduct = styled.View`
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const ImageProduct = styled.Image`
  width: 110px;
  height: 110px;
  margin-right: 10px;
`;
export const WrapperDescription = styled.View`
  margin-right: 0px;
  padding: 4px;
  width: 60%;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 0;
  font-size: 15px;
  width: 85%;
`;

export const WrapperPriceDelete = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const WrapperButton = styled.TouchableOpacity``;

export const Amount = styled.TextInput`
  background-color: #fff;
  color: #333;
  padding: 0px 20px;
  text-align: center;
  margin: 0 10px;
  font-size: 16px;
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
export const BuyButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: 8px;
  margin-top: auto;
  margin-bottom: 10px;
`;
export const TextBuyButton = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;
