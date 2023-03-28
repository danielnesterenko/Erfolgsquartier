<template>
    <q-page>
        <q-card>
            <q-card-section>
                <div class="text-h6">Artikel erstellen</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
                <q-input v-model="article.title" label="Titel" />
            </q-card-section>
            <q-card-section>
                <q-editor placeholder="Artikel Text..." v-model="article.text"/>
            </q-card-section>
            <q-card-actions>
                <q-btn icon="save" label="Speichern" @click="save"/>
            </q-card-actions>
        </q-card>
    </q-page>
</template>

<script>
import {ref} from "vue";
import {useArticleStore} from "../stores/articles";
import {useRouter} from 'vue-router'

export default {
    setup() {
        const article = ref({
            title: "",
            text: ""
        })

        const articleStore = useArticleStore()
        const router = useRouter()


        function save() {
            articleStore.saveArticle(article.value)
            router.push('/')
        }

        return {
            article,
            save
        }
    },
}
</script>
<style scoped>
</style>
