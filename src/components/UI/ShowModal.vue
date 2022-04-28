<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="main">default header</slot>
          </div>
          <div class="modal-footer">
            <button
                class="modal-default-button"
                @click="$emit('close')"
              >Close</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style scoped>

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all .5s
}

.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
}

.modal-container {
  width: auto;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: none;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
