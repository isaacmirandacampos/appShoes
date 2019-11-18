import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

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

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  };

  renderProduct = ({ item }) => {
    return (
      <Product>
        <ImageProduct source={{ uri: item.image }} />
        <Description>{item.title}</Description>
        <Price>{item.price}</Price>
        <AddToCart>
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
