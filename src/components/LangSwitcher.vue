<template>
  <div>
    <button @click="toggleModal">{{ currentLanguage }}</button>

    <div v-if="showModal" class="overlay">
      <div class="modal flex gap-4">
        <button
          @click="switchLanguage('en')"
          class="m-2 text-blackColor bg-whiteColor font-bold"
        >
          English
        </button>
        <button
          @click="switchLanguage('pt')"
          class="m-2 text-blackColor bg-whiteColor font-bold"
        >
          Português
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;
}

function switchLanguage(lang) {
  locale.value = lang;
  showModal.value = false;
}

const currentLanguage = computed(() => {
  return locale.value === "en" ? "English" : "Português";
});
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 20px;
}
</style>
