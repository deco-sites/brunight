import type { Product } from "deco-sites/std/commerce/types.ts";

export default function Teste(product: { product: Product }) {
  console.log({ product });
  return <div>Teste</div>;
}
