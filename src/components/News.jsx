import React,{useEffect,useState} from 'react';
import { getNews } from '../service/AxiosService';


const News = () => {

const [News, setNews] = useState([]);

useEffect(() => {
  getAllNews();
    
}, []);


const getAllNews = () =>{

getNews()
.then((res) =>{
    console.log(res);
    setNews(res.data.articles);
})

}

    return (
        <div className='NewsContainer'>

        {News.map((id,index) =>(
            <div className='News' key={index}>
            <h1>{id.title}</h1>
            <h3>{id.description}</h3>
            <p>{id.author}</p>
            <p>{id.source.name}</p>
            <a href={`${id.url}` }>View New</a>
            <img src={`${id.urlToImage}`} alt='img'></img>
            </div>
        ))}
            
        </div>
    );
}

export default News;
