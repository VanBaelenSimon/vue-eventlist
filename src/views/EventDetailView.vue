<template>
  <div class="container" v-if="event">
    <form @submit.prevent="saveEvent">
      <div class="form-group">
        <label for="dateInput">Date</label>
        <input type="date" class="form-control" id="dateInput" v-model="event.date">
      </div>
      <div class="form-group mt-3">
        <label for="titleInput">Title</label>
        <input type="text" class="form-control form-control-lg" id="titleInput" v-model="event.title">
      </div>
      <div class="form-group mt-3">
        <label for="descriptionInput">Description</label>
        <textarea class="form-control" id="descriptionInput" rows="3" v-model="event.description"></textarea>
      </div>
      <div class="form-group mt-3">
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useEventStore } from '../stores/EventStore'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      event: null
    }
  },
  methods: {
    saveEvent() {
      this.$store.updateEvent(this.event)
      this.$route.push('/events')
    }
  },
  created() {
    const store = useEventStore()
    const route = this.$route
    this.event = store.getEvent(route.query.id)
  }
}
</script>
