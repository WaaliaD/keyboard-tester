export function handleKeyDown (event: KeyboardEvent): void {
    event.preventDefault();
    if(event.repeat) return;

    const key = document.getElementById(`${event.code}`);
    if(!key?.classList) return;
    if (!key.classList.contains('active')) {
        key.classList.add('active');
        key.classList.add('afteractive');
    }

    let elem = document.createElement('p');
    elem.innerHTML = `${event.code}`;
    document.getElementById('toolbar')?.append(elem)
}

export function handleKeyUp (event: KeyboardEvent): void {
    let element = document.getElementById(`${event.code}`);
    if (element?.classList.contains('active')) {
        element?.classList.remove('active');
    }
}

export function recreateButton (): void {
    let toolbar: HTMLElement | null = document.getElementById('toolbar');
    if (toolbar) toolbar.innerHTML = '<div id="button">CLEAR</div>';

    document.getElementById('keyboard')?.querySelectorAll('.afteractive').forEach(key => {
        key.classList.remove('afteractive');
    });

    document.getElementById('button')?.addEventListener('click', recreateButton);
}