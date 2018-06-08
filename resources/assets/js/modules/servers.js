const state =  {
    "loaded": false,
    "servers": [],
};
const getters =  {
    getServers: (state) => {
        return state.servers;
    },
    isLoaded: (state) => {
        return state.loaded;
    }
};

const actions =  {};
const mutations =  {
    addServer: (state, server) => {
           state.servers.push(server);
    },
    setLoaded: (state) => {
        state.loaded = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
