<template>
  <button @click="() => open()">
    Open Modal
  </button>
</template>

<script setup>
import { useModal } from 'vue-final-modal'
import MyModal from '../modals/MyModal.vue'

const { open } = useModal({
  component: MyModal,
  attrs: {
    title: 'Hello World!',
  },
  slots: {
    default: '<p>The content of the modal</p>',
  },
})
</script>