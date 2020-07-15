class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".header__menu-icon");
        this.menuContent = document.querySelector(".header__menu-content")
        this.siteHeader = document.querySelector(".header")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click",() => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("header__menu-content--is-visible")
        this.siteHeader.classList.toggle("header--is-expanded")
        this.menuIcon.classList.toggle("header__menu-icon--closeX")
    }
}


export default MobileMenu;