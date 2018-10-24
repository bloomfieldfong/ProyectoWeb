import * as types from '../types';

export const addToInventory = (
  id,
  name,
  qty,
  idConductor,
) => ({
  type: types.INVENTORY_ADDED,
  payload: {
    id,
    name,
    qty,
    idConductor,
  }
});

export const addToCart = id => ({
  type: types.PRODUCT_ADDED_TO_CART,
  payload: {
    id,
  }
});
