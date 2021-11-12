import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(1)
    useEffect(() => {
        //Llamado al API
        cargarUsuarios()
    }, []);

    const cargarUsuarios = async () => {
        const resp = await reqRespApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);

        } else {
            paginaRef.current--;
            alert('No hay mas registro')
        }
        setUsuarios(resp.data.data)
    }

    const paginaSiguiente = () => {
paginaRef.current++;
        cargarUsuarios()
    }

    const paginaAnterior = () => {
        if(paginaRef.current>1){
            paginaRef.current--;
            cargarUsuarios();
        }
    }
    return { usuarios, paginaAnterior, paginaSiguiente }
}
