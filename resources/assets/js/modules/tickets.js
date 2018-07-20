const state =  {
    "queues": [],
    "priorities": [],
    "defaultQueue": "",
    "defaultPriority": "",
    "list": []
};
const getters =  {
    getQueues: (state) => {
        return state.queues;
    },
    getPriorities: (state) => {
        return state.priorities;
    },
    getDefaultQueue: (state) => {
        return state.defaultQueue;
    },
    getDefaultPriority: (state) => {
        return state.defaultPriority;
    }
};
const actions =  {};
const mutations =  {
    setQueues(state, queues)
    {
        state.queues = queues;
    },
    setPriorities(state, priorities)
    {
        state.priorities = priorities;
    },
    setDefaultQueue(state, queue)
    {
        state.defaultQueue = queue;
    },
    setDefaultPriority(state, priority)
    {
        state.defaultPriority = priority;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
