const state = {
    currency: undefined,
    periods: [],
    os: [],
    products: [],
    productsMap: new Map(),
    choice: {
      "period": "annual",
      "price": "baseAnnualPrice",
      "os": "windows",
      "server": 1,
      "addons": [3],
      "services": []
    },
    basket: new Map()
};
const getters =  {
    getServers: (state) =>  {
        return state.products.filter(product => product.section == "servers")
    },
    getServices: (state) =>  {
        return state.products.filter(product => product.section == "services")
    },
    getAddons: (state) =>  {
        return state.products.filter(product => product.section == "addons")
    },
    getOs: (state) =>  {
        return state.os;
    },
    getPeriods: (state) =>  {
        return state.periods;
    },
    getSubtotal: (state) => {

    }
};
const actions =  {};
const mutations = {
    addToBasket: function(state, key)
    {
        state.basket.set(key, state.productsMap.get(key));
    },
    removeFromBasket: function(state, key)
    {
        state.basket.delete(key);
    },
    setPriceType: function(state, period)
    {
      function ucFirst(s)
      {
          return s.charAt(0).toUpperCase() + s.substr(1);
      }
      state.choice.price = "base" + ucFirst(period) + "Price";
    },
    setRadio: function (state, choice){
        state.choice[choice.id] = choice.value;
    },
    addProduct: function(state, product)
    {
        state.products.push(product);
        state.productsMap.set(product.id, product);
    },
    addPeriod: function(state, period)
    {
        state.periods.push(period);
    },
    addOs: function(state, os)
    {
        state.os.push(os);
    },
    setCurrency: function(state, currency)
    {
        state.currency = currency;
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}