import axios from 'axios';
import { InformeServiceURL } from './Service.config';



export default function getAllFotos() {


    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: InformeServiceURL + '/fotos',
        headers: {}
    };

    return axios.request(config)
        .then((response) => {
            return JSON.stringify(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export  function getFotosPessoas(page: number, size: number) : any {
    console.log(444444);
    return axios.get(InformeServiceURL + "/galeria/pessoas-imagens", { params: { page: page, size: size } }).then((response) => {
        return response;
    });
}