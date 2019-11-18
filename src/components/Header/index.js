import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

// navigation.navigate('Home')
export default function Header({ navigate }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
