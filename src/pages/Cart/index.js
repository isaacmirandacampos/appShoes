import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

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
  ListCart,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      <ListCart showsVerticalScrollIndicator={false}>
        {cart.map(product => (
          <>
            <Product>
              <ImageProduct source={{ uri: product.image }} />
              <Wrapper>
                <Description>{product.title}</Description>
                <Price>{product.priceFormatted}</Price>
              </Wrapper>
              <Icon name="delete-forever" size={24} color={colors.primary} />
            </Product>
            <SubTotalView>
              <CountView>
                <Icon
                  name="add-circle-outline"
                  size={24}
                  color={colors.primary}
                />
                <Amount editable={false}>3</Amount>
                <Icon
                  name="remove-circle-outline"
                  size={24}
                  color={colors.primary}
                />
              </CountView>
              <SubTotal>R$400.90</SubTotal>
            </SubTotalView>
          </>
        ))}
      </ListCart>
      <TextTotal>Total</TextTotal>
      <PriceTotal>R$ 1612,10</PriceTotal>
      <BuyButton>
        <TextBuyButton>Finalizar pedido</TextBuyButton>
      </BuyButton>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Cart);
