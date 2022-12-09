import React from 'react';
import NewsForm from './NewsForm';
import { useDispatch,useSelector } from 'react-redux';
import axios from "axios"
import { setNewsSearch } from '../features/News/NewsSlice';



const News = () => {



const {newsSearch} = useSelector((state) => state.news);

const dispatch = useDispatch();


const getAllNews = e =>{

  console.log(e.target.elements)
  const {news} = e.target.elements;



const NewsSearch = news.value;
 




const res = `https://newsapi.org/v2/everything?q=${NewsSearch}&apiKey=a730a3ace764491ca71be77ae83f1741`;



axios.get(res)



.then((res) =>{

console.log(res.data);

dispatch(setNewsSearch(res.data.articles));
})
.catch((err) =>{
  console.log(err);
})

  e.preventDefault();

}
  


    return (
        <div className='NewsContainer'>


<NewsForm getAllNews={getAllNews}></NewsForm>



{newsSearch.map((news,index) =>(
    <div key={index} className='News'>
    <img src={`${news.urlToImage}`} alt='image'></img>
    <h1>{news.title}</h1>
    <h2>{news.description} <a href={`${news.url}`} target='blank'>View all</a></h2>
   <p>{news.publishedAt}</p>

    </div>


))}





            
        </div>
    );
}

export default News;
