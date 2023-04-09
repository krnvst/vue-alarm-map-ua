<template>
  <div>
    {{ counter }}
    <button @click="setIntervalTimer">
      setInterval
    </button>
    <button @click="stopIntervalTimer">
      stopInterval
    </button>
  </div>
</template>

<script>
export default {
  name: 'TimerInterval',
  props: {
    intervalInMilliseconds: {
      type: Number,
      default: 1000,
    },
  },
  data: () => ({
    intervalId: null,
    counter: 0,
  }),
  methods: {
    stopIntervalTimer() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.counter = 0;
    },
    setIntervalTimer() {
      if(!this.intervalId) {
        this.intervalId = setInterval(this.updateInterval, this.intervalInMilliseconds);
      }
    },
    updateInterval() {
      this.counter += 1;
      this.$emit('changeIntervalCount');
    }
  },
}
</script>