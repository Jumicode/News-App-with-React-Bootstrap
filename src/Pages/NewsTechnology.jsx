import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setNewsTechnology } from '../features/News/NewsSlice';
import { getTechnology } from '../service/AxiosService';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/News.css'


const Newstechnology = () => {


    const { newsTechnology } = useSelector((state) => state.news)
    const dispatch = useDispatch();
    useEffect(() => {
    getAllTechnology();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

   


const getAllTechnology = () =>{

   
    getTechnology()
    .then((res) =>{
        console.log(res);
dispatch(setNewsTechnology(res.data.data));
    })

}


    return (
        <div className='NewsContainer'>
         

         <h1 className='Title'>Technology</h1>
        <Row   xs={1} md={2} className="g-4">
        <Col>
        <Card >
        
        
        
        {newsTechnology.map((news,index) =>(
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

export default Newstechnology;
