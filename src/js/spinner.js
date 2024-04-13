import { Spinner } from 'spin.js';
import { refs } from './refs';

const opts = {
  lines: 16, // The number of lines to draw
  length: 41, // The length of each line
  width: 19, // The line thickness
  radius: 29, // The radius of the inner circle
  scale: 0.85, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 15, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#3c45c3', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '52%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);



export function showSpinner() {
    spinner.spin(refs.target);
    refs.target.classList.remove('is-hidden');
}

export function stopSpinner() {
    spinner.stop();
    refs.target.classList.add('is-hidden');
}