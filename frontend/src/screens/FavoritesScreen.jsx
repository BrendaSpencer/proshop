import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../slices/favoritesSlice';
import { addToCart } from '../slices/cartSlice';

const FavoritesScreen = () => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const { favoritesItems } = favorites;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromFavoritesHandler = async (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Favorites</h1>
        {favoritesItems ? (
          <ListGroup variant="flush">
            {favoritesItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => addToCartHandler(item, 1)}
                    >
                      <FaShoppingCart></FaShoppingCart>
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromFavoritesHandler(item._id)}
                    >
                      <FaTrash></FaTrash>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <Message>No favorites</Message>
        )}
        <Button className="m-4" type="button" variant="light">
          <Link to="/">Go Back</Link>
        </Button>
      </Col>
    </Row>
  );
};

export default FavoritesScreen;
