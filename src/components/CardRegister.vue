<template>
    <q-card class="my-card q-pt-md">
        <div class="flex items-center justify-center">
            <img class="img-register" :src="imgRegister">
        </div>
        <q-card-section class="flex items-center justify-center">
            <q-form
                class="q-gutter-md bg-white q-pr-md"
            >
                <div class="text text-subtitle2 text-weight-bold">Nombre</div>
                <q-input class="inputs q-pl-md q-pr-md shadow-4" v-model="name" dense type="text" :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                <div class="text text-subtitle2 text-weight-bold">Apellido</div>
                <q-input class="inputs q-pl-md q-pr-md shadow-4" v-model="lastName" dense type="text" :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                <div class="text text-subtitle2 text-weight-bold">Nombre Usuario</div>
                <q-input class="inputs q-pl-md q-pr-md shadow-4" v-model="user" dense type="text" :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                <div class="text text-subtitle2 text-weight-bold">Correo</div>
                <q-input class="inputs q-pl-md q-pr-md shadow-4" v-model="email" dense type="email" :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                <div class="text text-subtitle2 text-weight-bold">Contraseña</div>
                <q-input class="inputs q-pl-md q-pr-md shadow-4" v-model="password" dense :type="typeInput" :rules="[ val => val && val.length > 0 || 'Campo requerido']" >
                    <template v-slot:append>
                        <q-btn style="padding: 6px;" flat :icon="iconName" @click="cambiarType" />
                    </template>
                </q-input>
                <div class="flex items-center justify-center q-mt-xl">
                    <q-btn class="btn-submit text-weight-bold" label="Registrarse" type="submit" @click.prevent="mostrarAlgo" :disable="habilitarBtn"/>
                </div>
            </q-form>
        </q-card-section>
    </q-card>
</template>

<style scoped>

.img-register {
    width: 100px;
}

.text {
    font-family: 'jost';
}

.inputs {
    width: 436px;
    border: 2px solid #4B8BA7;
    border-radius: 10px;
    font-family: 'jost';
    font-size: 16px;
    padding-bottom: 25px;
}

.btn-submit {
    background-color: rgba(244, 207, 12, 0.7);
    font-family: 'jost';
    font-size: 20px;
    border-radius: 10px;
}
</style>

<script setup>
import imgRegister from "@/assets/img-register.svg";
import { computed, ref, shallowRef } from "vue";
import { useQuasar } from 'quasar';
import { useRouter } from "vue-router";

const name = ref('')
const lastName = ref('')
const user = ref('')
const email = ref('')
const password = ref('')
const typeInput = shallowRef('password')
const iconName = shallowRef('visibility_off')
const $q = useQuasar()
const router = useRouter()

const cambiarType = () => {
    if(typeInput.value === 'password') {
        typeInput.value = 'text'
        iconName.value = 'visibility'
    } else {
        typeInput.value = 'password'
        iconName.value = 'visibility_off'
    }
}

const mostrarAlgo = () => {
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        router.push('/login-cliente')
    } else {
        $q.notify({
            message: 'Correo no valido',
            color: 'blue',
            textColor: 'white',
            position: 'top',
            icon: 'error',
            timeout: 3000
        })
    }
}

const habilitarBtn = computed(() => {
    if(name.value !== '' && lastName.value !== '' && user.value !== '' && email.value !== '' && password.value !== '') {
        return false
    } else {
        return true
    }
})
</script>
