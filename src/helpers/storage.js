


export  const saveitems = (param) => {
localStorage.setItem('user',JSON.stringify(param))
return param
}

export const removeitem = () => {
    localStorage.clear('users')
}

