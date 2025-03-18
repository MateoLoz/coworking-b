export class httpcontroller  {
 static async getdata (url) {
    const res = await fetch(url).then((res)=> res.json()).then((res)=> {return res}).catch((err)=> {return err})
    return res
 }
 static async postdata (url,nombre,password) {
   console.log(url,nombre,password)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type':'application/json' ,
      },
      body: JSON.stringify({
         username:nombre,
         password:password
      })
    }).then((res)=> res.json()).then((res)=> {return res})

    return res
 }

}

// let res = await httpcontroller.postdata('http://localhost:3036/users/logout',"mateoLoz14ec","Mat15Qeex2")

