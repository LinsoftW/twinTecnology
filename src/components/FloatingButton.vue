<!-- src/components/FloatingButton.vue -->
<template>
  <button class="floating-button" @click="handleClick">
    <!-- Puedes agregar un ícono aquí, como una flecha o signo más -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'FloatingButton',
  methods: {
    handleClick() {
      // Lógica para manejar el clic del botón
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 20px;
  /*top: 274px;
  right: 30px;*/
  left: 30px;
  background-color: #36b9cc;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
.floating-button:hover {
  background-color: #0056b3;
}
</style>
