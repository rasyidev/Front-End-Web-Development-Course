import './21-article-item.js';
import article from './21-article.js';

const containerElement = document.querySelector(".container");

const articleItemElement = document.createElement("article-item");

articleItemElement.article = article;
console.log(articleItemElement);

containerElement.appendChild(articleItemElement);