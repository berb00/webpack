import _ from 'lodash'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
// import echarts from 'echarts';
import Icon from '@/assets/img/icon.png'

// css
import '@/assets/css/style.css'
import '@/assets/css/less.less'
import '@/assets/css/scss.scss'
import '@/assets/font/iconfont.css'

// import Data from './data.xml';
import Data from '@/assets/json/data.json'
import print from '@/js/util/print.js'
import util from '@/js/util/util.js'
import { helpers, Person } from '@/js/util/globals.js' // 全局变量

import '@/js/router/route'

// =============================================

Es6Promise.polyfill()

const person = new Person('berb00')
person.sayName()

helpers.test()

console.log(Data, util)

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

document.getElementsByClassName('imgtest')[0].appendChild(component())

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
document.getElementsByClassName('lazyLoad')[0].appendChild(lazyLoad())

