<template>
  <div class="alarm-map">
    <alarm-map-generate
      v-if='!isLoading'
      :states="states"
    />
    <TimerInterval
        :intervalInMilliseconds="5000"
        @change-interval-count="getStates"
    />
    <button @click='getStates'>
      getStates
    </button>
  </div>
</template>

<script>
import AlarmMapGenerate from '@/components/Map/AlarmMapGenerate.vue'
import TimerInterval from '@/components/TimerInterval';
import { getStatesStatus } from '@/api/alert'

export default {
  name: 'AlarmMap',
  components: {
    AlarmMapGenerate,
    TimerInterval,
  },
  data: () => ({
    isLoading: true,
    states: {},
  }),
  mounted() {
    this.getStates();
  },
  methods: {
    async getStates() {
      this.isLoading = true;
      try {
        const { data } = await getStatesStatus();
        this.states = data.states;
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
