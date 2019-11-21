import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoContainer,
} from './styles';

function Header({ onPress, goBack, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={goBack}>
          <Logo />
        </LogoContainer>
        <BasketContainer onPress={onPress}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          {cartSize >= 1 ? <ItemCount>{cartSize}</ItemCount> : null}
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
