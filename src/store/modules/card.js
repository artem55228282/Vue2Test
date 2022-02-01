export default {
  state: {
    cards: [
      {
        id: 1,
        url: "https://www.creditasia.uz/upload/iblock/c53/smartfon-iphone-12-128gb-black.jpg",
        model: "Iphone 12",
        brand: "Apple",
        price: 1000,
        category: "telephone",
      },
      {
        id: 2,
        url: "https://www.ixbt.com/img/x387/r30/00/02/32/91/IMG4428.jpg",
        model: "Note 20 Ultra",
        brand: "Samsung",
        price: 1000,
        category: "planshet",
      },
      {
        id: 3,
        url: "https://phonesdata.com/files/models/Xiaomi-Mi-11-Ultra-768.jpg",
        model: "MI 11 ultra",
        brand: "Xiaomi",
        price: 1000,
        category: "telephone",
      },
    ],
  },
  mutations: {
    updateCards(state, cards) {
      state.cards = cards;
    },
    createCards(state, newCard) {
      state.cards.unshift(newCard);
    },
  },
  actions: {
    stateCards(state){
      state.cards
    }
  },
  getters: {
    allCards(state) {
      return state.cards;
    },
    cardCount(state, getters) {
      return getters.allCards.length;
    },
  },
};
