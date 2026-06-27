import { posts } from "./post";

const mainPage = document.getElementById("user-feed");

let allPosts = '';

function getPosts() {
  for(let i = 0; i < posts.length; i++) {
    allPosts += `
      <section class="posts">
        <div class="post-header">
          <img class="post-avatar" src=${posts[i].avatar} alt=${posts[i].name}>
          <div class="post-info">
            <p class="post-username">${posts[i].name}</p>
            <p class="post-user-location">${posts[i].location}</p>
          </div>
        </div>
        <div class="post-content">
          <img class="content-image" src=${posts[i].post}>
        </div>
        <div class="post-interactions">
          <div class="interaction-icons">
            <img class="interact-icon-like" src="src/images/icon-heart.png" >
            <img class="interact-icon-comment" src="src/images/icon-comment.png" >
            <img class="interact-icon-share" src="src/images/icon-dm.png" >
          </div>
          <div class="likes-count">${posts[i].likes} likes</div>
          <div class="comment-section">
            <span class="commenter-name">${posts[i].username}<span>
            <span class="commenter-comment">${posts[i].comment}<span>
          </div>
        </div>
      </section>
    `
  }
  return allPosts;
}

function render() {
  mainPage.innerHTML = getPosts();
}

render();