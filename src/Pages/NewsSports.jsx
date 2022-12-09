import React,{useEffect} from 'react';
import { getSportNews } from '../service/AxiosService';
import { useDispatch,useSelector } from 'react-redux';
import { setNewsSports } from '../features/News/NewsSlice';



const NewsSports = () => {



    const {  newsSports } = useSelector((state) => state.news)

useEffect(() => {
   
getAllSportNews();

}, []);

const dispatch = useDispatch();


const getAllSportNews = () =>{


    getSportNews()
    .then((res =>{
        console.log(res);
    dispatch(setNewsSports(res.data.articles));
    }))

}


    return (
        <div>
            <h1>Sports</h1>

            {newsSports.map((news,index) =>(
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

export default NewsSports;
