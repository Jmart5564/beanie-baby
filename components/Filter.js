

export default function createFilter(form, { handleFilter }) {
    const [titleInput, animalInput] = form.querySelectorAll('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleFilter(
            formData.get('title'),
            formData.get('animal')
        );
    });
    return ({ title, animal }) => {
        titleInput.value = title;
        animalInput.value = animal;
    };
}