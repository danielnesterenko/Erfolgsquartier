<template>
    <q-page>
        <div v-if="article">
            <div class="q-mt-lg q-mb-lg text-h3 text-center">{{ article.title }}</div>
            <div class="q-ml-lg q-mr-lg" v-html="article.text"/>
            <div v-if="userStore.authenticated" class="text-center q-pt-xl">
                <q-btn icon="edit" label="Bearbeiten" class="relative-position" no-caps @click="edit"/>
            </div>
        </div>
        <div v-else>
            <q-spinner class="absolute-center" color="primary" size="3em"/>
        </div>
    </q-page>
</template>

<script>
import {useArticleStore} from "../stores/articles"
import {useUserStore} from "../stores/users"
import {useRouter, useRoute} from 'vue-router'
import {ref} from "vue";

export default {
    setup() {
        const articleStore = useArticleStore()
        const userStore = useUserStore()

        const router = useRouter()
        const route = useRoute()

        const id = route.params.id
        const article = ref(articleStore.findArticleById(id))

        function edit() {
            router.push("/edit/" + id)
        }

        return {articleStore, article, edit, userStore}
    }
}


</script>
