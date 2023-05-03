let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = () => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}