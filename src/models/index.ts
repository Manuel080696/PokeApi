export interface Card {
  id: string;
  name?: string;
  supertype?: string;
  subtypes?: string[];
  hp?: string;
  types?: string[];
  evolesFrom?: string;
  evolvesTo?: string[];
  weaknesses?: IWeakness[];
  resistances?: IResistance[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  number?: string;
  artist?: string;
  rarity: string;
  nationalPokedexNumbers?: number[];
  images?: ImagesSizes;
}

type ImagesSizes = {
  large: string;
  small: string;
};

type IWeakness = {
  type: string;
  value: string;
};

type IResistance = {
  type: string;
  value: string;
};
