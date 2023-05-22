export type CapacityUnit = 'ml' | 'l';

export type Drink = {
  name: string
  price: number
  capacity: number
  capacityUnit: CapacityUnit
};