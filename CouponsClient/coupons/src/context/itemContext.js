import { createContext } from "react";
export let itemsArray = {
  items: [
    {
      id: 1,
      user: { firstName: "", lastName: "" },
      coupon: { couponsName: "" },
    },
    {
      id: 2,
      user: { firstName: "", lastName: "" },
      coupon: { couponsName: "" },
    },
    {
      id: 3,
      user: { firstName: "", lastName: "" },
      coupon: { couponsName: "" },
    },
  ],
  itemsFunction: function (getItem) {
    this.items = getItem;
  },
};
export const itemsContext = createContext(itemsArray);
