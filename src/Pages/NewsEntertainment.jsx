import React,{useEffect} from 'react';
import { getEntertainmet } from '../service/AxiosService';

const NewsEntertainment = () => {
 
 
useEffect(() => {
  getEntertainmetNews()
}, []);


const getEntertainmetNews =() => {
 
    getEntertainmet()
    .then((res) =>{
     console.log(res)
    })

}

 
    return (

        <div>


        <h1>Entertainment</h1>

        </div>
    );
}

export default NewsEntertainment;
