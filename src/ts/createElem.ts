export default function createElem(tagName: string, id: string, html: string = '') {
    const element: HTMLElement = document.createElement(tagName);
    element.setAttribute('id', id);
    if (html) element.innerHTML = html;

    return element;
}  