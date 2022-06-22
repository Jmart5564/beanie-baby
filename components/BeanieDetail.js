

export default function createBeanieDetail(root) {
    const img = root.querySelector('img');
    const link = root.querySelector('.link');
    const theme = root.querySelector('.theme');
    const astroSign = root.querySelector('.astro-sign');
    const color = root.querySelector('.color');
    const birthday = root.querySelector('.birthday');
    const releaseYear = root.querySelector('.release-year');
    const styleNumber = root.querySelector('.style-number');
    const swingTagGeneration = root.querySelector('.swing-tag');
    const tushTagGeneration = root.querySelector('.tush-tag');
    const animal = root.querySelector('.animal');
    const subTheme = root.querySelector('.sub-theme');
    const releaseDate = root.querySelector('.release-date');

    return ({ beanie }) => {
        img.src = beanie.image;
        link.href = beanie.link;
        theme.textContent = `Theme: ${beanie.theme}`;
        astroSign.textContent = `Astrological Sign: ${beanie.astroSign}`;
        color.textContent = `Color: ${beanie.color}`;
        birthday.textContent = `Birthday: ${beanie.birthday}`;
        releaseYear.textContent = `Release Year: ${beanie.releaseYear}`;
        styleNumber.textContent = `Style Number: ${beanie.styleNumber}`;
        swingTagGeneration.textContent = `Swing Tag Generation: ${beanie.swingTagGeneration}`;
        tushTagGeneration.textContent = `Tush Tag Generation: ${beanie.tushTagGeneration}`;
        animal.textContent = `Animal: ${beanie.animal}`;
        subTheme.textContent = `Subtheme: ${beanie.subtheme}`;
        releaseDate.textContent = `Release Date: ${beanie.releaseDate}`;
    };
}