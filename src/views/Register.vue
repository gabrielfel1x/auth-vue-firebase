<template>
  <div class="h-full">
    <div>
      <h1 class="font-semibold">{{ $t("register") }}</h1>
      <div v-if="flag" class="font-bold text-base text-secondary">
        {{ $t("loading") }}
      </div>
      <div v-if="error" class="text-red-600">{{ msgError }}</div>
      <form @submit.prevent="pressed" :class="{ 'animate-pulse': flag }">
        <div class="email m-2">
          <input
            :disabled="flag"
            type="email"
            v-model="email"
            :placeholder="$t('email_placeholder')"
            class="input-style py-6 px-12"
          />
        </div>
        <div class="password m-2">
          <input
            :disabled="flag"
            :class="{ 'input-error': passwordError }"
            type="password"
            v-model="password"
            :placeholder="$t('password_placeholder')"
            class="input-style py-6 px-12"
          />
        </div>
        <div class="password m-2">
          <input
            :disabled="password === '' || flag"
            :class="{ 'input-error': passwordError }"
            type="password"
            v-model="confirmPassword"
            :placeholder="$t('confirm_password_placeholder')"
            class="input-style py-6 px-12"
          />
        </div>
        <div v-if="passwordError" class="text-red-600">
          {{ $t("passwords_not_match") }}
        </div>
        <button
          type="submit"
          class="m-2 text-blackColor bg-whiteColor font-bold"
          :class="{ spinBg: flag }"
        >
          <Spin v-if="flag" />
          <span v-else>{{ $t("register") }}</span>
        </button>
      </form>
      <div class="mt-4">
        <span>
          {{ $t("already_have_account") }}
          <router-link to="/login"> {{ $t("login") }} </router-link>.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Spin from "@/components/Spin.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { User, Error } from "../types/types";
const route = useRouter();
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const email = ref<User["email"]>("");
const password = ref<User["password"]>("");
const confirmPassword = ref<string>("");
const error = ref<Error["message"]>(null);
const msgError = ref<string>("");
const flag = ref<boolean>(false);
const passwordError = ref<boolean>(false);

async function pressed() {
  flag.value = true;
  error.value = null;
  if (confirmPassword.value !== password.value) {
    flag.value = false;
    passwordError.value = true;
    return;
  }
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    passwordError.value = false;
    const createdUser = userCredential.user;
    console.log(`deu bom fml ${createdUser}`);
    route.push("/home");
  } catch (err) {
    if ((err = "auth/email-already-in-use")) {
      msgError.value = t("email_in_use");
      setTimeout(() => {
        msgError.value = "";
      }, 5000);
    }
    error.value = true;
    console.log(err);
  }
  flag.value = false;
}
</script>

<style scoped>
.input-style {
  outline: none;
  border: 2px solid transparent;
  transition: border-color 0.8s ease;
}

.input-style:focus {
  border-color: #42b983;
}

.input-error {
  border-color: red;
}
button:hover {
  color: #f9f9f9;
  background-color: #1a1a1a;
}

.spinBg {
  background-color: #1a1a1a;
  outline: none;
  border: none;
}
</style>