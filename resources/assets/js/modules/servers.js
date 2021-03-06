import {EDITIONS} from "../classes/shop/action/const";

var state =  {
    "loaded": false,
    "servers": [],
    "serversMap": new Map(),
    "serverTypes": {}
};
state.serverTypes[EDITIONS.STANDALONE] = false;
state.serverTypes[EDITIONS.CLUSTER] = false;

const getters =  {
    getServers: (state) => {
        return state.servers;
    },
    isLoaded: (state) => {
        return state.loaded;
    },
    countServers: (state) => {
        return state.servers.length;
    }
};

const actions =  {};
const mutations =  {
    updateServer: (state, server) => {
        state.serversMap.set(server.id, server);
        state.serverTypes[server.edition] = true;

        for(let i = 0; i< state.servers.length; i++)
        {
            if(state.servers[i].id = server.id)
            {
                state.servers[i] = server;
                return;
            }
        }
    },
    logout: (state) => {
        state.servers = [];
        state.serversMap = new Map();
        state.serverTypes = [];
        state.loaded = false;
    },
    cleanServers: (state) => {
        state.servers = [];
        state.serversMap = new Map();
        state.serverTypes = [];
    },
    addServer: (state, server) => {
           state.servers.push(server);
           state.serversMap.set(server.id, server);
           state.serverTypes[server.edition] = true;

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
