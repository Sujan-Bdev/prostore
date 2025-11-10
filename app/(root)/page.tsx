import { Button } from '@/components/ui/button';
import React from 'react';

import sampleData from '@/db/sample-data';
import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.action';

 async function Homepage() {
  const latestProducts = await getLatestProducts()
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrival" limit = {4} />
    </>
  );
}

export default Homepage;
