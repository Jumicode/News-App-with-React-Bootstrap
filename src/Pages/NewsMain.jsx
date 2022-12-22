import React,{useEffect} from 'react';
import { getNews } from '../service/AxiosService';
import { useDispatch,useSelector } from 'react-redux';
import { setNewsMain } from '../features/News/NewsSlice';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/News.css'






const NewsMain = () => {


const { newsMain } = useSelector((state) => state.news)


useEffect(() => {
 getMainNews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
         
         <h1 className='Title'>News Main</h1>

<Row   xs={1} md={2} className="g-4">
<Col>
<Card >



{newsMain.map((news,index) =>(
    <div key={index} className="News">
    <Card.Img variant="top" src={`${news.urlToImage}`} alt='image' />
    <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>
              {news.description} 
              <a href={`${news.url}`} target='blank'>View all</a>
              <span>-{news.author}</span>
              </Card.Text>
             
            </Card.Body>


   
  


    </div>


))}

</Card>
</Col>
</Row>


        </div>
    );
}

export default NewsMain;
