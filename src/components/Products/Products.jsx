import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import background from '../../assets/background.jpg';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

  

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={6} >
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={3} >
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;