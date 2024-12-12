<script>
  export default {
    name: 'ModalApp',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="fade-modal">
    <div class="backdrop-modal">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            This is the default tile!
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            Default Body.
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            This is the default footer!
          </slot>
          <button
            type="button"
            class="green-btn"
            @click="close"
            aria-label="Close modal"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
  .backdrop-modal {
    position: fixed;
    top: 0;

    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 3px 3px 20px 2px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 20px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAEAC;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    border: none;
    top: 0;
    right: 0;

    font-size: 22px;
    padding: 11px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAEAC;
    background: transparent;
  }

  .green-btn {
    color: white;
    background: #4AAEAC;
    border: 1px solid #4AAEAC;
    border-radius: 3px;
  }

  .fade-modal-enter,
  .fade-modal-leave-to {
    opacity: 0;
  }

  .fade-modal-enter-active,
  .fade-modal-leave-active {
    transition: opacity .5s ease;
  }
</style>
