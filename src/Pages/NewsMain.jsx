import React,{useEffect} from 'react';
import { getNews } from '../service/AxiosService';


const NewsMain = () => {

useEffect(() => {
 getMainNews();
}, []);


const getMainNews = () =>{


getNews()
.then((res) =>{
console.log(res);
})

}

 return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
}

export default NewsMain;
