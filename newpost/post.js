import '../auth/user.js';
import { uploadImage, createRow } from '../fetch-utils.js';

/* Elements */

const imgInput = document.getElementById('image-upload');
const preview = document.getElementById('preview');
const errorD = document.getElementById('error');
const postForm = document.getElementById('post-form');

/* state */

let error = '';

/* Event Listeners */

imgInput.addEventListener('change', () => {
    const file = imgInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = '../assets/html.png';
    }
});

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    const imageFile = formData.get('image');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `bulletin/${randomFolder}/${imageFile.name}`;

    const url = await uploadImage('bulletin', imagePath, imageFile);

    const post = {
        title: formData.get('title'),
        descript: formData.get('post-text'),
        category: formData.get('post-type'),
        contact: formData.get('contact'),
        image_url: url,
    };

    const response = await createRow(post);

    error = response.error;

    if (error) {
        dispError();
    } else {
        location.assign('../');
    }
});

/* Functions */

function dispError() {
    if (error) {
        errorD.textContent = error.message;
    } else {
        errorD.textContent = '';
    }
}
