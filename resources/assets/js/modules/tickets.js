const state =  {
    "queues": [],
    "priorities": [],
    "list": []
};
const getters =  {};
const actions =  {};
const mutations =  {
    setQueues(state, queues)
    {
        state.queues = queues;
    },
    setPriorities(state, priorities)
    {
        state.priorities = priorities;
    }

};


export default {
    state,
    getters,
    actions,
    mutations
}
