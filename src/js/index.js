import _ from 'lodash';
import 'babel-polyfill';


import Icon from '../assets/img/icon.png';

// css
import '../style/style.css';
import '../style/less.less';
import '../style/scss.scss';


// import Data from './data.xml';
import Data from '../assets/json/data.json';
import printMe from './print.js';
import { file, helpers, Person } from './globals.js'; // 全局变量

var person = new Person("berb00");
person.sayName();

let url = '';
let devUrl = 'http:localhost:8080';
let proUrl = 'http://www.baidu.com';
if (DEV === 'development') {
  url = devUrl;
  // console.log('modee', process.env.NODE_ENV);
} else {
  url = proUrl;
}
console.log('URL________', url);

// Assume we are in the context of `window`
// this.alert('Hmmm, this probably isn\'t a great idea...');

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);


  btn.innerHTML = 'printMe';
  btn.onclick = printMe;
  element.appendChild(btn);


  return element;
}
  
document.body.appendChild(component());

dynamicImport();
function dynamicImport () {
  /* webpackChunkName: "jquery" */
  // return import('jquery').then($ => {
  //   console.log("$:", $)
  // }).catch(error => 'An error occurred while loading the component');
}

function lazyLoad() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');
  button.innerHTML = 'lazyModule';
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e => import(/* webpackChunkName: "print" */ './lazyModule').then(module => {
    var lazyModule = module.default;

    lazyModule();
  });

  return element;
}
document.body.appendChild(lazyLoad());


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    // console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
    // console.log(json)
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error));


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      // console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}





// 跨域请求
let xhr = new XMLHttpRequest();
// http:127.0.0.1:8080
xhr.open('GET', '/api/user', true);
xhr.onload = function () {
  console.log('################', xhr.response);
}

xhr.send();