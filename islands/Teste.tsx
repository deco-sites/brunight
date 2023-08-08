import type { Product } from "deco-sites/std/commerce/types.ts";
import type { Badge } from "deco-sites/brunight/loaders/vtex/badges.ts";

export default function Teste(
  { product, badges }: { product: Product; badges: Badge[] },
) {
  console.log({ product, badges });
  return <div>Teste</div>;
}
