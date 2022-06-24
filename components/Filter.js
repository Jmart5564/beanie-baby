

export default function createFilter(form, { handleFilter }) {
    const [titleInput, animalInput] = form.querySelectorAll('input');
    const astroSignSelect = form.querySelectorAll('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleFilter(
            formData.get('title'),
            formData.get('animal'),
            formData.get('astroSign')
        );
    });
    return ({ title, animal, astroSign }) => {
        titleInput.value = title;
        animalInput.value = animal;
        astroSignSelect.value = astroSign;
    };
}