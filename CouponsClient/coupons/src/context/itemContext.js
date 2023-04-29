import { createContext } from "react";
export let itemsArray = {
  items: [
    {
      id: 1,
      itemName: 1,
      userId: 1,
      couponId: 1 ,
    },
    {
      id: 2,
      itemName: 2,
      userId: 2,
      couponId: 2 ,
    },
    {
      id: 3,
      itemName: 3,
      userId: 3,
      couponId: 3
    },
  ],
  itemsFunction: function (getItem) {
    this.items = getItem;
  },
};
export const itemsContext = createContext(itemsArray);
