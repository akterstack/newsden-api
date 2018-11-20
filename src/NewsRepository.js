const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('a6d2803973c5412986b45a6877e23929')

export default class NewsRepository {

  async fetchSources() {

  }

  async fetchArticles() {
    return newsapi.v2
      .everything({
        sources: 'bbc-news,the-verge',
        language: 'en'
      })
  }

}
