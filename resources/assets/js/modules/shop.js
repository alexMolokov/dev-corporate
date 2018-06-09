const state = {
    currency: undefined,
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
    getSubtotal: (state) => {

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
    setCurrency: function(state, currency)
    {
        state.currency = currency;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}