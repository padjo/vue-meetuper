<template>
  <div>
    <AppHero />
    <div class="container">
      <section class="section">
      <div class="m-b-lg">
        <h1 class="title is-inline">Featured Meetups in "Location"</h1>
        <AppDropdown />
        <button class="button is-primary is-pulled-right m-r-sm">Create Meetups</button>
        <router-link :to="{name: 'PageMeetupFind'}"
                     class="button is-primary is-pulled-right m-r-sm">
                   All
        </router-link>
      </div>
      <div class="row columns is-multiline">
        <!-- Iterate your meetups here! -->
        <MeetupItem v-for="meetup in meetups"
                    :key="meetup._id"
                    :meetup="meetup" />
      </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <CategoryItem v-for="category in categories"
                          :key="category._id"
                          :category="category" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import CategoryItem from '@/components/CategoryItem'
  import MeetupItem from '@/components/MeetupItem'
  import { mapActions, mapState } from 'vuex'
  export default {
    components: {
      CategoryItem,
      MeetupItem
    },
    computed: {
      // meetups() {
      //  return this.$store.state.meetups
      // },
      // categories() {
      //  return this.$store.state.categories
      // },
      ...mapState({
        meetups: state => state.meetups,
        categories: state => state.categories,
      })
    }, 
    created () {
      //this.$store.dispatch('fetchMeetups') //mapActions takes over here
      //this.$store.dispatch('fetchCategories')  
      this.fetchMeetups()
      this.fetchCategories()
    },
    methods: {
      ...mapActions(['fetchMeetups','fetchCategories'])
    }
  }
</script>

<style scoped>
</style>