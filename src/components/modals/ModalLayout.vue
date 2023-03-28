<template>
  <div>
    <button @click="showModal = true">Открыть модальное окно</button>
    <vue-final-modal
        v-model="showModal"
        :name="name"
        :drag="true"
        :fit-parent="true"
        :esc-to-close="true"
        class="modal--container"
        content-class="modal--content"
        :content-style="{width: '70%', height: 'auto'}"
        @before-open="beforeOpen"
        @opened="onOpen"
        @before-close="onBeforeClose"
    >
      <h3>Заголовок модального окна</h3>
      <p>Содержимое модального окна</p>
      <button @click="showModal = false">Закрыть модальное окно</button>
    </vue-final-modal>
  </div>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
export default {
  components: {
    VueFinalModal,
  },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<style>
.modal--container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal--content {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
</style>
