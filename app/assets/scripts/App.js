import '../styles/styles.css' // importing the stylesheet
import MobileMenu from './modules/MobileMenu'













let mobileMenu = new MobileMenu();







//browser configuragtion webpack
if(module.hot){
    module.hot.accept()
}