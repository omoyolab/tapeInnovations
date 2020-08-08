import '../styles/styles.css' // importing the stylesheet
import MobileMenu from './modules/MobileMenu'
import StickyHeader from './modules/StickyHeader'

var $ = require('jquery');
window.jQuery = $;
window.$ = $;

import './modules/popup.js';
import './modules/utils.js';












let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
let modal




document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
      if (typeof modal == "undefined"){
        import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
            modal = new x.default()
            setTimeout(() => modal.openTheModal(), 20)
         }).catch(() => console.log("There was a problem"))
         
        }else {
            modal.openTheModal()
      }
    })
})






//browser configuragtion webpack
if(module.hot){
    module.hot.accept()
}