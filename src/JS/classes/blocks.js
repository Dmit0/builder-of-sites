import {row,col} from '../utils'

class Block{
    constructor(value,options){
        this.value=value
        this.options=options
    }
    toHTML(){
        throw new Error('you should realize method to html')
    }
}

export class TitleBlock extends Block{
    constructor(value,options){
        super(value,options)
    }
    toHTML(){
        const {styles,tag='h2'}=this.options    
        return row(col( `   
                <${tag}>${this.value}</${tag}>
        `),styles)
    }
}

export class textBlock extends Block{
    constructor(value,options){
        super(value,options)
    }
    toHTML(){
        return row(col(`
            <p style='margin-bottom:0'>${this.value}</p>
    `),this.options.styles)
    }
}

export class imageBlock extends Block{
    constructor(value,options){
        super(value,options)
    }
    toHTML(){
        const {styles,alt,imageStyles}=this.options
        return row(col(`
            <img src="${this.value}" alt="${alt}"  style=${imageStyles}/>
    `),styles)
    }
}

export class textColumnsBlock extends Block{
    constructor(value,options){
        super(value,options)
    }
    toHTML(){
        const html = this.value.map(item=>col(item))
        return row(html.join(' '),this.options.styles)
    }
}