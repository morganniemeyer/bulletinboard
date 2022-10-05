/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { renderPost } from './render-posts.js';
import { getPosts } from './fetch-utils.js';

/* Get DOM Elements */
const bigErr = document.getElementById('big-error');
const box = document.getElementById('post-box');

/* State */
let error = null;
let posts = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();
    error = response.error;
    posts = response.data;

    if (error) {
        dispError2();
    }
    if (posts) {
        displayPosts();
    }
});

/* Display Functions */

function dispError2() {
    if (error) {
        bigErr.textContent = error.message;
    } else {
        bigErr.textContent = '';
    }
}

function displayPosts() {
    box.innerHTML = '';

    for (const post of posts) {
        const postEl = renderPost(post);
        box.append(postEl);
    }
}
