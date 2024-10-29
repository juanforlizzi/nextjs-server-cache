import { getProductDetails } from "~/app/db/getProductDetails";

export default async function ProductImages() {
  const { images } = await getProductDetails();

  return (
    <div style={{ marginBottom: 50 }}>
      {images.map((src) => (
        <p key={src}>{src}</p>
      ))}
    </div>
  );
}
