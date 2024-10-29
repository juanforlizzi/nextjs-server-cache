import { redirect } from "next/navigation";

export default async function Page() {
  const id = Math.ceil(Math.random() * 1000);
  redirect(`/products/${id}`);
}
