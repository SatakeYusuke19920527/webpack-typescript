import _ from 'lodash'
import style from './style.css'

function component() {
    const element = document.createElement('div')
    const array = ['hello', 'webpack', '!']
    element.innerHTML = _.join(array, ' ')
    return element
}

document.body.appendChild(component())
document.body.classList.add('haikei')