const data = [
  {
    title: "The Suble Art of not giving",
    id: 1,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "Pineapple",
    id: 2,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 3,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 4,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 5,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 6,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 7,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 8,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 9,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
  {
    title: "The Suble Art of not giving",
    id: 10,
    price: 29.99,
    rating: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F68.media.tumblr.com%2Ffecffc82729d14922c308aec3ff93fe9%2Ftumblr_or6m9wsz3I1qaouh8o1_400.png&f=1&nofb=1",
  },
];

export const initialState = {
  basket: [],
  user: null,
  items: data,
  searchRenderList: data,
};

// Adding a selector

export const calculateBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((basket) => {
        return basket.id === action.id;
      });
      let nwBskt = [...state.basket];
      if (index >= 0) {
        nwBskt.splice(index, 1);
      } else {
        console.warn(`Can't remove the produce`);
      }
      return { ...state, basket: nwBskt };
    case "USER_SIGN":
      if (action.user) {
        return { ...state, user: action.user };
      } else {
        return { ...state, user: null };
      }
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    case "SEARCH":
      if (action.searchItem.toString() == "") {
        return { ...state, searchRenderList: state.items };
      } else {
        const itemSet = state.items.filter((item) => {
          return item.title
            .toString()
            .toLowerCase()
            .match(action.searchItem.toString().toLowerCase());
        });
        return { ...state, searchRenderList: itemSet };
      }
    default:
      return state;
  }
};

export default reducer;
