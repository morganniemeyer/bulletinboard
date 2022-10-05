export function renderPost(post) {
    const sec = document.createElement('section');
    sec.classList.add('post');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const ptext = document.createElement('p');
    ptext.textContent = post.descript;

    const h3 = document.createElement('h3');
    h3.textContent = post.contact;

    const img = document.createElement('img');
    img.src = post.image_url;

    const pcat = document.createElement('p');
    pcat.textContent = post.category;
    pcat.classList.add('type');

    sec.append(h2, ptext, h3, img, pcat);

    return sec;
}
