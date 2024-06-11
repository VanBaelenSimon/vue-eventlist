<template>
    <div class="event" @click="gotoEvent">
      <div class="event__container">
        <p class="event__date">{{ event.date }}</p>
        <div class="event__info">
          <h3 class="event__info-title">{{ event.title }}</h3>
          <p class="event__info-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      event: Object,
      required: true
    },
    methods: {
      gotoEvent() {
        this.$router.push({ path: '/events/detail', query: { id: this.event.id } })
      }
    }
  }
  </script>
  