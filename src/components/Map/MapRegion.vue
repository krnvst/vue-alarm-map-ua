<template>
    <g>
        <path :d=region.d :fill="apiStates?.alert ? 'red' : '#6e85ed'" stroke='rgba(255, 255, 255, 0.2)' />
        <text
            fill='#fff'
            stroke-width="0.1"
            xmlSpace="preserve"
            style="white-space: nowrap"
            font-size="20"
            :x=region.titleX
            :y=region.titleY
        >
            {{ region?.title }}
        </text>
    </g>
</template>

<script>
export default {
  name: 'MapRegion',
  components: {},
  props: {
    region: {
        type: Object,
        default: () => {}
    },
    apiStates: {
        type: Object,
        default: () => {}
    },
  }
};
</script>