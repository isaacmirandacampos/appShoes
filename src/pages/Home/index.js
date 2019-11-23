import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount || 0;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }
    getProduct();
  }, []);

  function handlerAddRequest(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Product>
        <ImageProduct source={{ uri: item.image }} />
        <Description>{item.title}</Description>
        <Price>{item.priceFormatted}</Price>
        <AddToCart onPress={() => handlerAddRequest(item.id)}>
          <Icon name="add-shopping-cart" color="#FFF" size={20} />
          {amount[item.id] >= 1 ? <Amount>{amount[item.id]}</Amount> : null}
          <TextButton>Adicionar ao Carrinho</TextButton>
        </AddToCart>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={renderProduct}
      />
    </Container>
  );
}
