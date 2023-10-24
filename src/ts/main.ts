import '../scss/style.scss'
import { handleKeyDown, handleKeyUp, recreateButton } from './handlers.ts'
import { ids, indexesSecondaryColorElements, names } from './layout.ts';
import creatElementsArray from './createrElementsArray.ts'
import createElem from './createElem.ts';

const layout = creatElementsArray(ids, names, indexesSecondaryColorElements);

const keyboard = createElem('div', 'keyboard');
const toolbar = createElem('div', 'toolbar');
const button = createElem('div', 'button', 'CLEAR');

layout.forEach(element => {
    keyboard.append(element);
});

toolbar.append(button);

document.getElementById('app')!.append(keyboard, toolbar);

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
document.getElementById('button')?.addEventListener('click', recreateButton);