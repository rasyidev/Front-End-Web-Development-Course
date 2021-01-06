import './22-article-list.js'
import articles from './22-articles.js'

const articleListElement = document.createElement('article-list');

articleListElement.articles = articles;

document.body.appendChild(articleListElement);