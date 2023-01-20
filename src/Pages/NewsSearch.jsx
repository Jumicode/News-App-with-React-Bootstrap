import React from 'react';
import NewsForm from './NewsForm';
import { useDispatch,useSelector } from 'react-redux';
import { setNewsSearch } from '../features/News/NewsSlice';
import axios from "axios"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/News.css'




const News = () => {



const {newsSearch} = useSelector((state) => state.news);

const dispatch = useDispatch();


const getAllNews = e =>{

  const {news} = e.target.elements;



const NewsSearch = news.value;
 




const res = `http://api.mediastack.com/v1/news?access_key=3dfefa6bfd4057fdcecf17af3195373a&keywords=${NewsSearch}&languages=en,es`;



axios.get(res)



.then((res) =>{

console.log(res.data);

dispatch(setNewsSearch(res.data.data));
})
.catch((err) =>{
  console.log(err);
})

  e.preventDefault();

}
  


    return (

      <div className='NewsContainer'>
         

         <NewsForm  getAllNews={getAllNews}></NewsForm>

<Row   xs={1} md={2} className="g-4Search">

<Col>

<Card >



{newsSearch.map((news,index) =>(
    <div key={index} className="News">
    <Card.Img variant="top" src={`${news.image}`} alt='image' />
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

export default News;
