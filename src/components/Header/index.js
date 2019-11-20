import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoContainer,
} from './styles';

export default function Header({ onPress, goBack }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={goBack}>
          <Logo />
        </LogoContainer>
        <BasketContainer onPress={onPress}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
