import {model} from  './JS/model'
import {Site} from './JS/classes/site'
import { Sidebar } from './JS/classes/sidebar'
import './css/main.scss'


const site=new Site('#site',update)

const update=newBlock=>{
    model.push(newBlock)
    site.render()
}

new Sidebar('#penel')

site.render(model)

