import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoContainer,
} from './styles';

export default function Header({ goBack, onPress }) {
  const cartSize = useSelector(state => state.cart.length);
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
