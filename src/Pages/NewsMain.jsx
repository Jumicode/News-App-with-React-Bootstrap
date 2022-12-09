import React,{useEffect} from 'react';
import { getNews } from '../service/AxiosService';
import { useDispatch,useSelector } from 'react-redux';
import { setNewsMain } from '../features/News/NewsSlice';

const NewsMain = () => {


const { newsMain } = useSelector((state) => state.news)


useEffect(() => {
 getMainNews();
}, []);

const dispatch = useDispatch();


const getMainNews = () =>{

getNews()
.then((res) =>{
console.log(res);
dispatch(setNewsMain(res.data.articles))
})
}




 return (
        <div className='NewsContainer'>
         

{newsMain.map((news,index) =>(
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

export default NewsMain;
