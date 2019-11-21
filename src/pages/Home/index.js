import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import formatPrice from '../../util/format';

import {
  Container,
  Product,
  ImageProduct,
  Description,
  Price,
  AddToCart,
  TextButton,
  Amount,
} from './styles';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  };

  handlerAddRequest = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;
    return (
      <Product>
        <ImageProduct source={{ uri: item.image }} />
        <Description>{item.title}</Description>
        <Price>{item.priceFormatted}</Price>
        <AddToCart onPress={() => this.handlerAddRequest(item.id)}>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          {amount[item.id] >= 1 ? <Amount>{amount[item.id]}</Amount> : null}
          <TextButton>Adicionar ao Carrinho</TextButton>
        </AddToCart>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          keyExtractor={item => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0;
    return amount;
  }, {}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
