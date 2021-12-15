import { useEffect, useState } from "react";
import IUseFetch from "../model/IUseFetch";

import {Api} from '../../config/endpoint';


/**
 *  metodo generico para consumir serivios 
 * @param config  configucion de axios y del servicio IUseFetch
 */
const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(Error);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefectch, setisRefectch] = useState<IUseFetch>();

    
    useEffect(() => {
        setIsLoading(true);
        Api({ method: isRefectch?.method, url: isRefectch?.url, data: isRefectch?.data })
            .then((res) => setResponse(res.data))
            .catch((err) => setError(err))
            .finally(() => {
                setIsLoading(false)
            });
          }
         , [isRefectch?.url]
    );
    return [
        response, 
        error, 
        isLoading 
       , setisRefectch];
}

export default useFetch;
