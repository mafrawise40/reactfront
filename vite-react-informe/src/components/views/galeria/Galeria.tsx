import { useEffect, useState } from "react";



export default function Galeria() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:8080/galeria/fotos?")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (

        <div>
            <h2> Galeria de Fotos </h2>
            <br></br>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">


                {items.map((i) =>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={'data:image/jpeg;base64,' + i['arquivo']} alt="" />
                    </div>
                )
                }
            </div>
        </div>

    )
}