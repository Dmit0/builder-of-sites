export class Site{
    constructor(querySelector){
        this.el=document.querySelector(querySelector)
    }

    render(model){
        this.el.innerHTML=''
        model.forEach(block=>{
            this.el.insertAdjacentHTML('beforeend',block.toHTML())
        })
    }
}