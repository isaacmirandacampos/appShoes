import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
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

class Cart extends Component {
  handlerDelete = id => {
    const { RemoveProduct } = this.props;
    RemoveProduct(id);
  };

  handleAddAmount = (id, amount) => {
    const { UpdateAmountRequest } = this.props;
    UpdateAmountRequest(id, amount + 1);
  };

  handleRemoveAmount = (id, amount) => {
    const { UpdateAmountRequest } = this.props;
    UpdateAmountRequest(id, amount - 1);
  };

  handlerRender = ({ item }) => {
    return (
      <WrapperProduct key={item.id}>
        <Product>
          <ImageProduct source={{ uri: item.image }} />
          <WrapperDescription>
            <Description>{item.title}</Description>
            <WrapperPriceDelete>
              <Price>{item.priceFormatted}</Price>
              <WrapperButton onPress={() => this.handlerDelete(item.id)}>
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </WrapperButton>
            </WrapperPriceDelete>
          </WrapperDescription>
        </Product>
        <SubTotalView>
          <CountView>
            <WrapperButton
              onPress={() => this.handleRemoveAmount(item.id, item.amount)}
            >
              <Icon
                name="remove-circle-outline"
                size={24}
                color={colors.primary}
              />
            </WrapperButton>
            <Amount editable={false}>{item.amount}</Amount>
            <WrapperButton
              onPress={() => this.handleAddAmount(item.id, item.amount)}
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
  };

  render() {
    const { cart, total, navigation } = this.props;
    console.tron.log(cart);
    return cart[0] ? (
      <Container>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={this.handlerRender}
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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
