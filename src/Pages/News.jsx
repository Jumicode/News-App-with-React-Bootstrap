import React,{useEffect,useState} from 'react';
import { getNews } from '../service/AxiosService';


const News = () => {

const [News, setNews] = useState([]);

useEffect(() => {
  getAllNews();
    
}, []);


const getAllNews = () =>{


}

    return (
        <div className='NewsContainer'>

            
        </div>
    );
}

export default News;
