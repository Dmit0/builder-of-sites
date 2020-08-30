import {TitleBlock,textBlock,imageBlock,textColumnsBlock} from './classes/blocks'
import {css} from './utils'
export const model=[
    new TitleBlock('Constructor',{
        styles:css({
            background:'linear-gradient(to right, #ff0099, #493240)',
            color:'#fff',
            padding: '1.5rem',
            [text-align]: 'center'
        }),
        tag:'h2'
    }),
    new textBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam id voluptates tempora veniam suscipit facilis sunt quod iste non nisi repellendus incidunt fugit cupiditate in saepe error, et ea?',{
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    }),
    new textColumnsBlock(['1 text','2 text','3 text'],{
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    }),
    new imageBlock('https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/d113a8df26114a14b26544f371d07e14_292x292.png',{
        styles: 'padding: 2rem 0;display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    })
]