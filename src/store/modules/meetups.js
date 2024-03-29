import axios from 'axios'
export default {
  namespaced: true,
  state: {
    items: [],
    item: {}
  },
  getters: {
   
  }, 
  actions: {
    fetchMeetups ({state, commit}) {
      commit('setItems', {resource: 'meetups', items: []}, {root: true}) // don't display prev state
      return axios.get('/api/v1/meetups')
        .then(res => {
          const meetups = res.data
          commit('setItems', {resource: 'meetups', items: meetups}, {root: true})
          return state.items
        })
    },
     fetchMeetupById ({state, commit}, meetupId) {
      commit('setItem', {resource: 'meetups', item: {}}, {root: true}) // render an empty object until //new  meetup state comes from the fake db
      return axios.get(`/api/v1/meetups/${meetupId}`)
        .then(res => {
          const meetup = res.data
          commit('setItem', {resource: 'meetups', item: meetup}, {root: true})
          return state.item
        })
    }
  },
 
  mutations: {

  }
}