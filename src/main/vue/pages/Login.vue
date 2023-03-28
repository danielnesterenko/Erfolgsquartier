<template>
    <q-page>
        <div class="col-auto fixed-center shadow-10 rounded-borders">
            <div class="row-auto relative-position">
                <q-icon name="newspaper" size="12em" color="white"></q-icon>
                <q-icon name="newspaper" size="12em" class="absolute-center"></q-icon>
            </div>
            <div class="row-auto">
                <div class="text-h4 q-ma-sm">Bitte logge dich ein!</div>
            </div>
            <div class="row-auto q-ma-sm">
                <q-input v-model="username" label="Benutzername"/>
                <q-input v-model="password" type="password" hint="Passwort"/>
                <div class="row-auto">
                    <div class="col q-mt-sm">
                        <q-btn label="Anmelden" @click="login()" color="primary" class="row-auto q-ma-xs"></q-btn>
                        <q-btn label="Registrieren" color="secondary" class="row-auto q-ma-xs"></q-btn>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import {ref} from 'vue'
import {useUserStore} from "../stores/users"
import {useQuasar} from 'quasar'
import {useRouter} from 'vue-router'

export default {
    setup() {
        const $q = useQuasar()
        const router = useRouter()
        const username = ref('')
        const password = ref('')

        const userStore = useUserStore()

        function login() {
            userStore.authenticate(username.value, password.value)
            if (userStore.authenticated) {
                router.go(-1)
            } else {
                $q.notify({
                    type: 'negative',
                    message: 'Login Fehlgeschlagen',
                    caption: 'Falsches Passwort oder Benutzername'
                })
            }
        }

        return {username, password, login}
    }
}

</script>
