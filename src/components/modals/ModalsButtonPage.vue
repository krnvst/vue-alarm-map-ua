<template>
  <MyModalPreview />
  <ModalsContainer />
  <ModalLayout />
</template>

<script>
import { ModalsContainer } from 'vue-final-modal'
import MyModalPreview from './modals/MyModalPreview.vue'
import ModalLayout from './modals/ModalLayout.vue'
export default {
  name: 'ModalsButtonPage',
  components: {
    MyModalPreview,
    ModalsContainer,
    ModalLayout,
  },
}
</script>