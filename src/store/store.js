import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        users: [], 
        user: {}
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        updateUsers(state, user) {
            const newUsers = state.users.filter((usr) => usr.id !== user.id)
            newUsers.push(user)
            newUsers.sort((a, b) => { if (a> b) return 1; if (a.id < b.id) return -1; if (a.id == b.id) return 0;})
            state.users = newUsers;
        },
        updateUser(state, user) {
           state.user = user;
        }
    },
    getters: {
        users: state => state.users,
        user: state => state.user
    }
})