import NewsAPI from 'newsapi'
const newsapi = new NewsAPI('a6d2803973c5412986b45a6877e23929').v2

export async function fetchSources() {
  let data = await newsapi.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  })
  return data.sources
}

export async function fetchArticles() {
  let data = await newsapi.everything({
    sources: 'bbc-news,the-verge',
    language: 'en'
  })
  return data.articles
}
