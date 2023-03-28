<template>
    <VueFinalModal
      class="confirm-modal"
      @update:model-value="val => $emit('update:modelValue', val)"
    >
      <div class="flex items-center h-10">
        <h1 v-if="title" class="text-2xl">
          {{ title }}
        </h1>
        <button class="ml-auto" @click="$emit('update:modelValue', false)">
          close
        </button>
      </div>
      <slot />
    </VueFinalModal>
  </template>

<script>
import { VueFinalModal } from 'vue-final-modal'

export default {
  name: 'UiInput',
  components: {
    VueFinalModal,
  },
  props: {
    title: String,
  },
  emits: ['update:modelValue'],
}
</script>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
}
.confirm-modal-content > * + *{
  margin: 0.5rem 0;
}
.confirm-modal-content h1 {
  font-size: 1.375rem;
}
.confirm-modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
}
.dark .confirm-modal-content {
  background: #000;
}
</style>
