<template>
    <q-page>
        <q-list>
            <q-item v-for="article in articleStore.articlesOverview" :key="article.id" clickable href="/">
                <q-item-section>
                    <router-link :to="'/article/' + article.id">{{ article.title }}</router-link>
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
import {useArticleStore} from "../stores/articles"

export default {
    setup() {
        const articleStore = useArticleStore()
        return {articleStore}
    }
}
</script>
