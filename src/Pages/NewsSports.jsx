import React,{useEffect} from 'react';
import { getSportNews } from '../service/AxiosService';


const NewsSports = () => {

useEffect(() => {
   
getAllSportNews();

}, []);

const getAllSportNews = () =>{


    getSportNews()
    .then((res =>{
        console.log(res)
    }))

}


    return (
        <div>
            <h1>Sports</h1>
        </div>
    );
}

export default NewsSports;
