import '../auth/user.js';

/* Elements */

const imgInput = document.getElementById('image-upload');
const preview = document.getElementById('preview');

imgInput.addEventListener('change', () => {
    const file = imgInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = '../assets/html.png';
    }
});
