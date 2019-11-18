import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';
import {
  Container,
  ImageProduct,
  Wrapper,
  Description,
  Price,
  SubTotalView,
  CountView,
  Amount,
  SubTotal,
  Product,
  TextTotal,
  PriceTotal,
  BuyButton,
  TextBuyButton,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Product>
        <ImageProduct />
        <Wrapper>
          <Description>Tênis muito maneiro</Description>
          <Price>R$129,90</Price>
        </Wrapper>
        <Icon name="delete-forever" size={24} color={colors.primary} />
      </Product>
      <SubTotalView>
        <CountView>
          <Icon name="add-circle-outline" size={24} color={colors.primary} />
          <Amount editable={false}>3</Amount>
          <Icon name="remove-circle-outline" size={24} color={colors.primary} />
        </CountView>
        <SubTotal>R$400.90</SubTotal>
      </SubTotalView>

      <Product>
        <ImageProduct />
        <Wrapper>
          <Description>Tênis muito maneiro</Description>
          <Price>R$129,90</Price>
        </Wrapper>
        <Icon name="delete-forever" size={24} color={colors.primary} />
      </Product>
      <SubTotalView>
        <CountView>
          <Icon name="add-circle-outline" size={24} color={colors.primary} />
          <Amount editable={false}>3</Amount>
          <Icon name="remove-circle-outline" size={24} color={colors.primary} />
        </CountView>
        <SubTotal>R$400.90</SubTotal>
      </SubTotalView>
      <TextTotal>Total</TextTotal>
      <PriceTotal>R$ 1612,10</PriceTotal>
      <BuyButton>
        <TextBuyButton>Finalizar pedido</TextBuyButton>
      </BuyButton>
    </Container>
  );
}
