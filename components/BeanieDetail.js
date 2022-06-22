

export default function createBeanieDetail(root) {
    const img = root.querySelector('img');
    const intro = root.querySelector('.intro');
    const description = root.querySelector('.desription');

    return ({ beanie }) => {
        img.src = beanie.image;
        //intro.textContent = 
        description.textContent = beanie.description;
    };
}