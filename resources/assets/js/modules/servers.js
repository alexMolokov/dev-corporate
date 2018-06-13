const state =  {
    "loaded": false,
    "servers": [],
    "serversMap": new Map(),
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
    updateServer: (state, server) => {
        state.serversMap.set(server.id, server);
        for(let i = 0; i< state.servers.length; i++)
        {
            if(state.servers[i].id = server.id)
            {
                state.servers[i] = server;
                return;
            }
        }
    },
    addServer: (state, server) => {
           state.servers.push(server);
           state.serversMap.set(server.id, server);
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
