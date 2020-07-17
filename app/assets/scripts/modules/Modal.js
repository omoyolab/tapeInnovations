class Modal{
    constructor(){
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }



    events(){
        //Listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())


        // Pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeTheModal()
        }
    }


    openTheModal(){
        this.modal.classList.add("modal--is-visible")
    }


    closeTheModal(){
        this.modal.classList.remove("modal--is-visible")
    }


    injectHTML(){
        document.body.insertAdjacentHTML('beforeend',`
        <div class="modal">
        <div class="modal__inner">
          <div class="wrapper wrapper--narrow">
            <p class="modal__description">Contact Form will be placed here soon!</p>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>
        `)
    }

}


export default Modal