import { getProductDetails } from "~/app/db/getProductDetails";
import ProductDetails from "./ProductDetails";

export default async function Page({
  params,
}: {
  params: Promise<Record<string, string>>;
}) {
  const { productID } = await params;
  const { productTitle } = await getProductDetails(productID);

  return (
    <div>
      <h1 style={{ marginBottom: 50 }}>{productTitle}</h1>
      <ProductDetails />
      <div style={{ marginTop: 50 }}>
        <a href="/" style={{ textDecoration: "underline" }}>
          Visit random product
        </a>
      </div>
    </div>
  );
}
