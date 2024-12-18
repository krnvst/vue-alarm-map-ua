<template>
  <div class="alarm-map">
    <svg viewBox="0 0 1000 670" fill=green xmlns="http://www.w3.org/2000/svg">
        <g id="map">
            <MapRegion
              v-for='region in regions'
              :key='region'
              :region=region
              :api-states="findState(region.id)"
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
      type: [Array, Object], // Теперь поддерживаем и объект, и массив
      default: () => [],
    },
  },
  data: () => ({
    regions: regions || [],
  }),
  methods: {
    /**
     * Найти состояние для региона по его ID.
     * Если states не является массивом, обработать его корректно.
     * @param {string|number} regionId - Идентификатор региона
     * @returns {Object} Состояние региона или пустой объект
     */
    findState(regionId) {
      // Приводим states к массиву, если это объект (или возвращаем пустой массив)
      const statesArray = Array.isArray(this.states) ? this.states : Object.values(this.states || {});
      return statesArray.find(state => state.id === regionId) || {};
    },
  },
};
</script>
<style lang='scss' scoped>
.alarm-map svg {
  max-height: 80vh;
  max-width: 100%;
}
</style>
