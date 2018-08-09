const state = {
    currency: undefined,
    exchangeRate: {},
    shortCurrencySymbols: {
        "USD":"$",
        "EUR": "&#x20ac;"
    },
    discount: 0,
    periods: [],
    os: [],
    products: [],
    productsMap: new Map()
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
    getRenewDiscount: (state) => {
        return state.discount;
    },
    getCurrency: (state) => {
        return state.currency;
    },
    getShortCurrencySymbol: (state) => {
        if(typeof state.shortCurrencySymbols[state.currency] !== "undefined" ) return  state.shortCurrencySymbols[state.currency];
        return state.currency;
    },
    getRate: (state) => {
        if(typeof state.exchangeRate[state.currency] !== "undefined" ) return  state.exchangeRate[state.currency];
        return 1;
    }
};
const actions =  {};
const mutations = {
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
    addRate: function(state, rate) {
        state.exchangeRate[rate.id] = rate.value;
    },
    setCurrency: function(state, currency)
    {
        state.currency = currency;
    },
    setDiscount: function(state, discount)
    {
        state.discount = discount;
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}