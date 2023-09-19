import axios from 'axios';
import { useEffect, useState } from 'react';



function GaleriaPessoa() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState(0);
    const [isLast, setIsLast] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:8080/galeria/pessoas-imagens", { params: { page: current, size: 5 } }).then((response) => {
            setIsLoaded(true);
            let data = [].concat(response.data.content);
            setItems([...items, ...data]);
            setIsLoaded(false);
            setCurrent(current + 1);
        });

    }, []);

    let carregarMaisFotos = () => {
        axios.get("http://localhost:8080/galeria/pessoas-imagens", { params: { page: current, size: 5 } }).then((response) => {
            setIsLoaded(true);
            let data = [].concat(response.data.content);
            setItems([...items, ...data]);
            setIsLoaded(false);
            setCurrent(current + 1);
            setIsLast(response.data.last)

        });
    }

    let getBtnCarregarMais = () => {
        if (!isLast) {
            return (<button type="button" onClick={carregarMaisFotos} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Carregar Mais Fotos</button>)
        } else {
            return (<></>)
        }
    }




    return (

        <div id="imagens">


            <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-gray-900">Pessoas Catalogadas </h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">



                            {items.map((i, key) =>
                                <>
                                    <div className="group relative">
                                        <div className="relative h-150 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-100">
                                            <img key={key} id={i['id']} className="h-full w-full object-cover object-center" src={'data:image/jpeg;base64,' + i['arquivo']} alt=""></img>

                                        </div>
                                        <h3 className="mt-6 text-sm text-gray-500">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                -
                                            </a>
                                        </h3>
                                        <p className="text-base font-semibold text-gray-900">{i['nomePessoa'] }
                                            {i['apelido'] && ' (' + i['apelido'] + ')'}
                                        </p>
                                    </div>
                                </>
                            )
                            }






                        </div>
                    </div>
                </div>
            </div>



            <h2>  </h2>
            <br></br>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">



            </div>

            <div className="mt-10">
                {getBtnCarregarMais()}
            </div>

        </div>

    )
}

export default GaleriaPessoa;