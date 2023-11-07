import React from 'react';
import { useRouter } from 'next/router';

const ProductId = () => {
const router = useRouter();
const productId = router.query.productId
  return (
    <div>
    Product Details Page {productId}
    </div>
  )
}

export default ProductId
