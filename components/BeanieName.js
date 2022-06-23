

export default function createBeanieName(root) {
    return ({ title }) => {
        document.title = title;
        root.textContent = title;
    };
}