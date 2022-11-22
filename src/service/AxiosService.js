import axios from "axios"





export const getNews = () =>{

return axios.get('https://newsapi.org/v2/everything?q=world&apiKey=a730a3ace764491ca71be77ae83f1741');

}


export const getSportNews = () =>{
    
    return axios.get('https://newsapi.org/v2/everything?q=Sport&apiKey=a730a3ace764491ca71be77ae83f1741')
}


export const getEntertainmet = () =>{


    return axios.get('https://newsapi.org/v2/everything?q=Entertainment&apiKey=a730a3ace764491ca71be77ae83f1741')
}


export const getTechnology = () =>{

    return axios.get('https://newsapi.org/v2/everything?q=Technology&apiKey=a730a3ace764491ca71be77ae83f1741');
    
}