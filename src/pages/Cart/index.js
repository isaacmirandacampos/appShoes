import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import formatPrice from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import colors from '../../styles/colors';
import {
  Container,
  Product,
  ImageProduct,
  WrapperProduct,
  WrapperDescription,
  Description,
  WrapperPriceDelete,
  Price,
  WrapperButton,
  SubTotalView,
  CountView,
  Amount,
  SubTotal,
  TextTotal,
  PriceTotal,
  BuyButton,
  TextBuyButton,
  CartEmpty,
  BackToHome,
  TextBack,
} from './styles';

export default function Cart({ navigation }) {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.amount * product.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.amount * product.price;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function handlerDelete(id) {
    dispatch(CartActions.RemoveProduct(id));
  }

  function handleAddAmount(id, amount) {
    dispatch(CartActions.UpdateAmountRequest(id, amount + 1));
  }

  function handleRemoveAmount(id, amount) {
    dispatch(CartActions.UpdateAmountRequest(id, amount - 1));
  }

  function handlerRender({ item }) {
    return (
      <WrapperProduct key={item.id}>
        <Product>
          <ImageProduct source={{ uri: item.image }} />
          <WrapperDescription>
            <Description>{item.title}</Description>
            <WrapperPriceDelete>
              <Price>{item.priceFormatted}</Price>
              <WrapperButton onPress={() => handlerDelete(item.id)}>
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </WrapperButton>
            </WrapperPriceDelete>
          </WrapperDescription>
        </Product>
        <SubTotalView>
          <CountView>
            <WrapperButton
              onPress={() => handleRemoveAmount(item.id, item.amount)}
            >
              <Icon
                name="remove-circle-outline"
                size={24}
                color={colors.primary}
              />
            </WrapperButton>
            <Amount editable={false}>{item.amount}</Amount>
            <WrapperButton
              onPress={() => handleAddAmount(item.id, item.amount)}
            >
              <Icon
                name="add-circle-outline"
                size={24}
                color={colors.primary}
              />
            </WrapperButton>
          </CountView>
          <SubTotal>{item.subTotal}</SubTotal>
        </SubTotalView>
      </WrapperProduct>
    );
  }

  return cart[0] ? (
    <Container>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={handlerRender}
      />
      <TextTotal>Total</TextTotal>
      <PriceTotal>{total}</PriceTotal>
      <BuyButton>
        <TextBuyButton>Finalizar pedido</TextBuyButton>
      </BuyButton>
    </Container>
  ) : (
    <CartEmpty>
      <Icon name="shopping-cart" size={300} color="#aaa" />
      <BackToHome onPress={() => navigation.goBack()}>
        <TextBack>Voltar para loja</TextBack>
      </BackToHome>
    </CartEmpty>
  );
}
