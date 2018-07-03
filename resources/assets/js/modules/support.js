const state =  {
    "config": null,
    "catalogs": new Map(),
    "docs": new Map()
};
const getters =  {
    getConfig: (state) => {
        return state.config;
    },
    getCatalog: (state) => {
        return state.catalogs;
    },
    getDoc: (state) => {
        return state.docs;
    },
};
const actions =  {};
const mutations =  {
    setConfig(state, config)
    {
        state.config = config;
    },
    saveDoc(state, docObject) {
        state.docs.set(docObject.key, docObject.data)
    },
    saveCatalog(state, catalogObject) {
        state.catalogs.set(catalogObject.key, catalogObject.data)
    }

}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
