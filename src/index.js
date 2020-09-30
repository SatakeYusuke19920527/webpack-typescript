const component = () => {
    const element = document.createElement("div")
    const array = ['hello', 'webpack']
    element.innerHTML = _.join(array, ' ')
    console.log('hello world')
    return element
}

document.body.appendChild(component())