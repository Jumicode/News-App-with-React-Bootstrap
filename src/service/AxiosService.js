import axios from "axios"

export const getNews = () =>{

return axios.get('https://newsapi.org/v2/everything?q=OnePiece&apiKey=a730a3ace764491ca71be77ae83f1741');

}