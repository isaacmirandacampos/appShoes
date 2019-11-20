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

  handlerAddRequest = product => {
    const { addToCartRequest } = this.props;
    addToCartRequest(product);
  };

  renderProduct = ({ item }) => {
    return (
      <Product>
        <ImageProduct source={{ uri: item.image }} />
        <Description>{item.title}</Description>
        <Price>{item.priceFormatted}</Price>
        <AddToCart onPress={() => this.handlerAddRequest(item)}>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          <Amount>1</Amount>
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
export default connect(null, mapDispatchToProps)(Home);
