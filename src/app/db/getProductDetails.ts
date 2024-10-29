import { cache } from "react";

export type ProductDetails = {
  productID: string;
  productTitle: string;
  description: string;
  price: number;
  images: string[];
};

const ProductCache = cache((): { productDetails?: ProductDetails } => ({
  productDetails: undefined,
}));

export const getData = async (productID: string): Promise<ProductDetails> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        productID,
        productTitle: `Title ${productID}`,
        description: `Description ####### ${productID}`,
        price: Math.ceil(Math.random() * 500) + 10,
        images: ["1.jpg", "2.jpg", "3.jpg"],
      });
    }, 1000);
  });
};

export const getProductDetails = async (productID?: string) => {
  if (productID) {
    const productDetails = await getData(productID);
    ProductCache().productDetails = productDetails;
    return productDetails;
  }
  const productDetails = ProductCache().productDetails;
  if (productDetails === undefined) {
    throw new Error(
      "Can't get product details unless it has been hydrated first!"
    );
  }
  return productDetails;
};
