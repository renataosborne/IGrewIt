import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import green from '@material-ui/core/colors/green'
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes = useStyles();

    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
            <Link className={classes.link} to="/">get shopping!</Link>!
        </Typography>
    );

    const lightGreen = green[300];
    const darkGreen = green[800];

    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <>
            <Grid container spacing={6}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={3} key={lineItem.id}>
                        <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="medium" type="button" variant="contained" color="lightGreen" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} component={Link} to="/checkout" size="medium" type="button" variant="contained" color="darkGreen">Checkout</Button>
                </div>
            </div>
        </>
    );
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
};
export default Cart;