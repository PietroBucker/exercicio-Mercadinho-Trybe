export type WightUnit = 'kg' | 'g';

export type Food = {
  name: string,
  price: number,
  weight: number,
  weightUnit: WightUnit
};
