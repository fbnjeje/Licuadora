const btn = document.getElementById('btn')
const blender = document.getElementById('blender')

var estado = "apagada"

const activador = () => {
  
    if(estado == "apagada"){
        estado = "prendido"
        console.log("Estoy encendido");
        blender.classList.add('toogle')
    }else{
        estado = "apagada"
        console.log("Estoy apagado");
        blender.classList.remove('toogle')
    }

}
btn.addEventListener('click', activador);

activador()