import '../css/componentes.css';
import imagen from '../assets/img/imagen.jpg';
export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1');
    
    const h1= document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    
    document.body.append(h1);

    //creando imagen
    //const img = document.createElement('img');
    //img.src = imagen;
    //document.body.append(img);
}
    
