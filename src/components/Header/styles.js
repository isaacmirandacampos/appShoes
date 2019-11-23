import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../styles/colors';
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: ${colors.dark};
  flex-direction: row;
  max-height: 30px;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;
export const LogoContainer = styled.TouchableOpacity`
  width: 200px;
  height: 40px;
  position: absolute;
  top: ${hp('1%')};
  left: ${hp('3%')};
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  position: absolute;
  left: ${wp('88%')};
  top: ${hp('1.5%')};
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
