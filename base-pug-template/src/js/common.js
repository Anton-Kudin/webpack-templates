import $ from 'jquery';
global.jQuery = $;
global.$ = $;

console.log($('.wrapper'));
let add = (a, b) => a + b
console.log(add(2, 3))