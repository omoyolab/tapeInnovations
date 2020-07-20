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
          <h2 class="headline headline__centered headline__light">We'd love to hear from you</h2>
            <p class="modal__description">201 E. Risinger Rd Suite 101
            Fort Worth, TX 76140
            USA<br>
            
            Phone: (817) 568-1212<br>
            Fax: (817) 568-1295<br>
            Email: sales@tapeinnovations.com
            </p>
            <form>
            <label for="fname">Full Name:</label>
            <input type="text" placeholder="Full Name">
            <label for="email">Email:</label>
            <input type="email" placeholder="Email">
            <label for="phone">Phone Number:</label>
            <input type="number" placeholder="Phone Number"><br>
            <label for="subject">Subject:</label>
            <input class="input__subject" type="text" placeholder="Subject"><br>
            <h4>Your Message</h4>
            <textarea cols="60" rows="8"></textarea><br>
            <input type="submit" class="btn btn__orange" value="Submit">
        </form>
          </div>
        </div>
        <div class="modal__close">X</div>
      </div>
        `)
    }

}


export default Modal