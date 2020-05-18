import _ from 'lodash'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
// import echarts from 'echarts';
import Icon from '@/assets/img/icon.png'

// css
import '@/assets/css/style.css'
import '@/assets/css/less.less'
import '@/assets/css/scss.scss'

// import Data from './data.xml';
// import Data from '@/assets/json/data.json';
import print from '@/js/util/print.js'
import { helpers, Person } from '@/js/util/globals.js' // 全局变量

import '@/js/map/amap'
import '@/js/router/route'

Es6Promise.polyfill()

const person = new Person('berb00')
person.sayName()

helpers.test()

function component () {
    const element = document.createElement('div')
    const btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    const myIcon = new Image()
    myIcon.src = Icon
    element.appendChild(myIcon)

    btn.innerHTML = 'printMe'
    btn.onclick = print.printMe
    element.appendChild(btn)

    return element
}

document.body.appendChild(component())

dynamicImport()
function dynamicImport () {
    /* webpackChunkName: "jquery" */
    // return import('jquery').then($ => {
    //   console.log("$:", $)
    // }).catch(error => 'An error occurred while loading the component');
}

function lazyLoad () {
    const element = document.createElement('div')
    const button = document.createElement('button')
    const br = document.createElement('br')
    button.innerHTML = 'lazyModule'
    element.appendChild(br)
    element.appendChild(button)

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ '@/js/util/lazyModule').then(module => {
        const lazyModule = module.default

        lazyModule()
    })

    return element
}
document.body.appendChild(lazyLoad())

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
    // console.log('We retrieved some data! AND we\'re confident it will work on a letiety of browser distributions.')
    // console.log(json)
    })
    .catch(error => console.error('Something went wrong when fetching this data: ', error))

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered: ', registration)
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
        })
    })
}
// // 跨域请求
// let xhr = new XMLHttpRequest();
// // http:127.0.0.1:8080
// xhr.open('GET', '/api/user', true);
// xhr.onload = function () {
//   console.log('################', xhr.response);
// }

// xhr.send();

// function updatePosition () {
//     myChart.setOption({
//         graphic: echarts.util.map(data, function (item, dataIndex) {
//             return {
//                 position: myChart.convertToPixel('grid', item)
//             };
//         })
//     });
// }

// function showTooltip (dataIndex) {
//     myChart.dispatchAction({
//         type: 'showTip',
//         seriesIndex: 0,
//         dataIndex: dataIndex
//     });
// }

// function hideTooltip (dataIndex) {
//     myChart.dispatchAction({
//         type: 'hideTip'
//     });
// }

// function onPointDragging (dataIndex, dx, dy) {
//     data[dataIndex] = myChart.convertFromPixel('grid', this.position);

//     // Update data
//     myChart.setOption({
//         series: [{
//             id: 'a',
//             data: data
//         }]
//     });
// }
