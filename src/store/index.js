import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //data we are sharing with our components
  state: {
    meetups: [],
    categories: [],
    threads: [],
    meetup: {}

  }, 
  //like computed properties . simple functions working on state
  getters: {
    meetups (state) {
      return state.meetups
    },
    categories (state) {
      return state.categories
    }

  },
  // like component methods. they should not mutate state. good place to fetch data. 
  // Usually results in data
  actions: {
    fetchMeetups (context) {
      axios.get('/api/v1/meetups')
        .then(res => {
          const meetups = res.data
          context.commit('setMeetups', meetups)
        
        })
    },
    fetchCategories (context) {
      axios.get('/api/v1/categories')
        .then(res => {
          const categories = res.data
          context.commit('setCategories', categories)
        })
    }

  },
  // functions that mutate state
  mutations: {
    setMeetups (state, meetups) {
        state.meetups = meetups

    },
    setCategories (state, categories) {
      state.categories = categories

    }

  }
})