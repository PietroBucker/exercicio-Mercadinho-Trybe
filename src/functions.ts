import { CartItem } from './types/CartItem';
import { Drink } from './types/Drink';
import { Food } from './types/Food';

export function first<Type>(array: Type[]): Type {
  return array[0];
}

export function updateItem<Type>(array: Type[], indice: number, updateValue: Type): Type[] {
  if (indice > array.length) {
    return array;
  }

  const result = array.map((el, ind) => (ind === indice ? updateValue : el));
  return result;
}

export function buildCartItem(item: Food | Drink, quantity: number): CartItem {
  const cart = {
    name: item.name,
    price: item.price,
    quantity,
  };
  return cart;
}