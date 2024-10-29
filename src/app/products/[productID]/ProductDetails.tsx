import { getProductDetails } from "~/app/db/getProductDetails";
import ProductImages from "./ProductImages";
import Button from "./Button";

export default async function ProductDetails() {
  const data = await getProductDetails();

  const { description } = data;

  return (
    <div>
      <ProductImages />
      <div>
        <p style={{ marginBottom: 50 }}>{description}</p>
        <Button data={data} />
      </div>
    </div>
  );
}
