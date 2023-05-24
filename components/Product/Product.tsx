import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import * as React from 'react';
import './Product.scss';

const Product = ({ data }) => {
  return (
    <div>
      <Card variant="outlined">
        <CardHeader title={data.name} />
        <CardContent>
          <Grid container>
            <Grid cotainer justifyContent="flex-end" item xs={12}>
              <img src={data.image} />
            </Grid>
            <Grid container justifyContent="flex-end">
              <span>{data.price}</span>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <div className="productCard">
        <div className="productTitle">
          <h2>{data.name}</h2>
        </div>
        <div className="productImages">
          <img src={data.image} />
        </div>
        <div className="productPrice">
          <span>{data.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
