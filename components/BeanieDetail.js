

export default function createBeanieDetail(root) {
    const img = root.querySelector('img');
    const theme = root.querySelector('.color');
    const astroSign = root.querySelector('.astro-sign');

    return ({ beanie }) => {
        img.src = beanie.image;
        //intro.textContent = 
        theme.textContent = beanie.theme;
        astroSign.textContent = `Astrological sign is ${beanie.astroSign}`;

    };
}