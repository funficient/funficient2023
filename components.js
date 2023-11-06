// ----------    Create a custom component that can be used in the main HTML section -------------
const template = document.createElement("template")
template.innerHTML = `<style>
                        h3 {color: green}
                       </style>
                       <H3 data-title>
                        <slot></slot>
                       </H3>`



class PrimaryButton extends HTMLElement {
    constructor() {
        super()

        // Attach a shadow DOM with open mode to allow you to modify the DOM
        const shadow = this.attachShadow({ mode: "open" })
        shadow.append(template.content.cloneNode(true))
        this.title = shadow.querySelector("[data-title]")
        this.title.innerText = this.innerText
         
    }

}


// ----------    Register the custom component with the DOM    -------------

customElements.define("primary-button", PrimaryButton)