<template>
  <div class="eventlist">
    <h2>Upcoming Events</h2>
    <div class="eventlist__container">
      <EventCardComponent v-for="event in store.allEvents" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import { useEventStore } from '../stores/EventStore'
import EventCardComponent from '../components/EventCardComponent.vue'

export default {
  components: {
    EventCardComponent
  },
  data() {
    return {
      store: useEventStore()
    }
  },
  mounted() {
    this.store.fetchEvents()
  },
}
</script>
