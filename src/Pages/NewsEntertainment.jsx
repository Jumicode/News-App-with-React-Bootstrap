import React,{useEffect} from 'react';
import { getEntertainmet } from '../service/AxiosService';
import { useDispatch,useSelector } from 'react-redux';
import { setNewsEntertainment } from '../features/News/NewsSlice';



const NewsEntertainment = () => {
 
    const { newsEntertainment } = useSelector((state) => state.news)


 
useEffect(() => {
  getEntertainmetNews()
}, []);


const dispatch = useDispatch();

const getEntertainmetNews =() => {
 
    getEntertainmet()
    .then((res) =>{
     console.log(res);
     dispatch(setNewsEntertainment(res.data.articles));
    })

}

 
    return (

        <div>


        <h1>Entertainment</h1>

     

    {newsEntertainment.map((news,index) =>(
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

export default NewsEntertainment;
