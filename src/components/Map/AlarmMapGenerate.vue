<template>
  <div class="alarm-map">
    <svg viewBox="0 0 1000 670" fill=green xmlns="http://www.w3.org/2000/svg">
        <g id="map">
            <MapRegion
              v-for='region in regions'
              :key='region'
              :region=region
              :api-states="states.find(states => states.id === region.id)"
            />
        </g>
    </svg>
  </div>
</template>

<script>
import MapRegion from '@/components/Map/MapRegion.vue'
import { regions } from '@/data/regions'

export default {
  name: 'AlarmMap',
  components: {
    MapRegion,
  },
  props: {
    states: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    regions,
  }),
};
</script>
<style lang='scss' scoped>
.alarm-map svg {
  max-height: 80vh;
  max-width: 100%;
}
</style>
