import _ from 'lodash'
import { nijou, NAME } from './utilites'

function component() {
    const element = document.createElement('div')
    const array = ['hello', 'webpack', '!']
    element.innerHTML = _.join(array, ' ')
    return element
}

console.log(nijou(100), '=====', NAME)

document.body.appendChild(component())