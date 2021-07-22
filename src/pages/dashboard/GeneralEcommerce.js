// material
import { Container, Grid } from '@material-ui/core';
// components
import Page from '../../components/Page';
import {
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceSaleByGender,
  EcommerceSalesOverview
} from '../../components/_dashboard/general-ecommerce';

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  return (
    <Page title="General: E-commerce | Minimal-UI">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <EcommerceNewProducts />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceSalesOverview />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
