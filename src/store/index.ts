import { createStore, StoreOptions } from 'vuex';

import * as UserModule from './UserModule';

// Create a new store instance.
const store = createStore<Object>(<StoreOptions<any>>{
    modules: {
        UserModule: <Object>{
            namespaced: true,
            ...UserModule,
            persist: true,
        },
    },
});

export default store;
