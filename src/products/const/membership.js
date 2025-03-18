export const memberships = [
    {
        type:"Taller",
        id:1,
        nombre:"Taller niños y adolescentes",
        price:"36.000",
        frecuencia:"p/mes",
        typefrecuencia:"1 clase por semana",
        clases:"4 clases por mes",
        duracion:"1:30hs",
        turnos:"Martes / Miercoles / Jueves",
        materiales:{
            has:true,
            info:"material ilimitado",
        },
        guardado:""

    },
    {
        type:"Taller",
        id:2,
        nombre:"Taller Libre",
        price:"60.000",
        frecuencia:"p/mes",
        typefrecuencia:"1 clase por semana",
        clases:"4 clases en el mes",
        duracion:"2hs",
        turnos:"Lunes 18 - 20 hs/ Martes 16 a 18 hs",
        materiales:{
            has:true,
            info:"2kg de arcilla por mes ",
        },
        guardado:""
    },
    {
        type:"Membresia",
        id:3,
        nombre:"espacio de Coworking",
        price:"70.000",
        frecuencia:"p/mes",
        typefrecuencia:"",
        clases:"dias ilimitados",
        duracion:"horas ilimitadas",
        turnos:"Lunes 18 - 20 hs / Martes 16 a 18 hs",
        materiales:{
            has:false,
            info:"no incluye materiales",
        },
        guardado:"no incluye lugar de guardado"
    },

    {
        type:"Taller",
        id:4,
        nombre:"Taller alfareria",
        price:"120.000",
        frecuencia:"",
        typefrecuencia:"",
        clases:"6 clases",
        duracion:"2hs",
        turnos:"",
        materiales:{
            has:true,
            info:"materiales incluidos"
        },
        guardado:""
    },

    {
        type:"Curso",
        id:5,
        nombre:"Ciclo formacion",
        price:"350.000",
        frecuencia:"p/mes",
        typefrecuencia:"",
        clases:"4 clases por mes",
        duracion:"2hs",
        turnos:"Jueves 8:30 / 22:30",
        materiales:{
            has:undefined,
            info:'',
        },
        guardado:""
    },

    {
        type:"Diario",
        id:6,
        nombre:"Bono diario",
        price:"20.000",
        frecuencia:"p/dia",
        typefrecuencia:"",
        clases:"1 clase",
        duracion:"4hs",
        turnos:"",
        materiales:{
            has:false,
            info:'No incluye materiales',
        },
        guardado:""
    },

]