import {defineStore} from 'pinia'
import {computed, ref} from 'vue'


export const useArticleStore = defineStore('articles', () => {

    const articles = ref([
        {
            id: 1,
            title: "Artikel 1",
            text: "Dies ist Artikel 1"
        },
        {
            id: 2,
            title: "Artikel 2",
            text: "Dies ist Artikel 2"
        }
    ])

    const articlesOverview = computed(() => articles.value.map(({id, title, _}) => {
        return {
            id,
            title
        }
    }))

    function saveArticle(article) {
        const newId = articles.value.length + 1
        articles.value.push({
                id: newId,
                title: article.title,
                text: article.text
            }
        )
    }

    function findArticleById(id) {
        return articles.value.find(article => article.id === parseInt(id))
    }

    return {articles, saveArticle, findArticleById, articlesOverview}
})
