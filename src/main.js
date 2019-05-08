import { a } from './js/header'
import { content } from './js/content'
import  Footer  from './js/footer'
import Header from './js/header'
const fn1 = () => {
  console.log(Header)
  // console.log(Footr)                                                                                                                                                                                                     (footer)
}


fn1()
a()


const greeter = require('./js/greeter.js');
document.querySelector("#root").appendChild(greeter());