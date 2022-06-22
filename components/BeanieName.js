

export default function createBeanieName(root) {
    return ({ name }) => {
        document.title = name;
        root.textContent = name;
    };
}