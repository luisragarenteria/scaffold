import { ResponseApi } from "../Interfaces/api";

export const baseUrl = ''

export const get = (url: string): Promise<ResponseApi>=>{
    console.log(url);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulando un resultado exitoso después de ms milisegundos
          resolve({
                status: true,
                message: 'Todo correcto',
                data:[]
        });
        }, 1000);
    });
}


export const post = ()=>{
    
}