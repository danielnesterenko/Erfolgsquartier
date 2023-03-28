<template>
    <q-page>
        <q-card v-if="article">
            <q-card-section>
                <div class="text-h6">Artikel bearbeiten</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
                <q-input v-model="article.title" label="Titel" />
            </q-card-section>
            <q-card-section>
                <q-editor placeholder="Artikel Text..." v-model="article.text"/>
            </q-card-section>
            <q-card-actions>
                <q-btn icon="save" label="Speichern" @click="finishEditing"/>
            </q-card-actions>
        </q-card>
        <div v-else>
            <q-spinner class="absolute-center" color="primary" size="3em"/>
        </div>
    </q-page>
</template>

<script>
import {useArticleStore} from "../stores/articles";
import {useRoute, useRouter} from 'vue-router'
import {ref} from "vue";

export default {
    setup() {
        const articleStore = useArticleStore()
        const router = useRouter()
        const route = useRoute()
        const id = route.params.id
        const article = ref(articleStore.findArticleById(id))

        function finishEditing() {
            router.push('/')
        }

        return {
            article,
            finishEditing
        }
    },
}
</script>
<style scoped>
</style>
