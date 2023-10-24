export default function creatElementsArray (ids: Array<string>, names: Array<string>, indexes: Set<number>) {
    let layout = [];

    for(let i=0; i<=ids.length-1; i++) {
        let elem = document.createElement('div');
        elem.id = ids[i];
        elem.innerHTML = names[i];
        elem.classList.add('key');
        if(indexes.has(i)) elem.classList.add('secondary-color');
        layout.push(elem);
    }

    return layout;
}