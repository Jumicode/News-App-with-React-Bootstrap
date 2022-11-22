import React,{useEffect} from 'react';
import { getTechnology } from '../service/AxiosService';

const Newstechnology = () => {


    useEffect(() => {
    getAllTechnology();
    }, []);


const getAllTechnology = () =>{

    getTechnology()
    .then((res) =>{
        console.log(res);
    })

}


    return (
        <div>
            
        </div>
    );
}

export default Newstechnology;
