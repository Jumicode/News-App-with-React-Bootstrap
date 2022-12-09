import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setNewsTechnology } from '../features/News/NewsSlice';
import { getTechnology } from '../service/AxiosService';

const Newstechnology = () => {


    const { newsTechnology } = useSelector((state) => state.news)

    useEffect(() => {
    getAllTechnology();
    }, []);

    const dispatch = useDispatch();


const getAllTechnology = () =>{

   
    getTechnology()
    .then((res) =>{
        console.log(res);
dispatch(setNewsTechnology(res.data.articles));
    })

}


    return (
        <div>


 

{newsTechnology.map((news,index) =>(
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

export default Newstechnology;
