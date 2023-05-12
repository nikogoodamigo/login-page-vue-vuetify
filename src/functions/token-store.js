import { createStore } from "vuex";

export const tokenStore = createStore({
    state() {
        return {
            token: ''
        };
    }
});
