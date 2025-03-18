import cursos from '../mocks/cursos.json' with {type:"json"}

const cursoMap = new Map()

cursoMap.set("cursos",cursos.cursos)



export function modifiedCursos  (id,{title,img,description}) {
const cursocopy = cursoMap.get("cursos")
const index = cursocopy.findIndex(curso => curso.id === id)
if(index !== -1){
   if(title) cursocopy[index].title = title
   if(img) cursocopy[index].img = img
   if(description)  cursocopy.description = description
   
   cursoMap.set("cursos",cursocopy)
}
}




export default cursoMap