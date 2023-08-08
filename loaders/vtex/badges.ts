import type { Context } from "deco-sites/std/packs/vtex/accounts/vtex.ts";

export interface ClusterBadge {
  type: "cluster";
  collectionId: string;
}

export interface SpecificationBadge {
  type: "specification";
  specificationName: string;
  specificationValue: string;
}

export interface CategoryBadge {
  type: "category";
  categoryId: string;
}

export type BadgeType = ClusterBadge | SpecificationBadge | CategoryBadge;

export interface Badge {
  type: BadgeType;
  name: string;
  backgroundColor?: string;
  textColor?: string;
}

/**
 * @title {{badge.name}}
 */
export interface BadgeItem {
  badge: Badge;
}

export interface Props {
  /**
   * @title Badges
   */
  badges: BadgeItem[];
}

const loader = (
  props: Props,
  _req: Request,
  _ctx: Context,
): Badge[] => {
  return props.badges.map((item) => item.badge);
};

export default loader;
