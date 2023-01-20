import axios from "axios"




export const getNews = () =>{

return axios.get('http://api.mediastack.com/v1/news?access_key=3dfefa6bfd4057fdcecf17af3195373a&categories=general&languages=en');

}


export const getSportNews = () =>{
    
    return axios.get('http://api.mediastack.com/v1/news?access_key=3dfefa6bfd4057fdcecf17af3195373a&&categories=sports&languages=en')
}


export const getEntertainmet = () =>{


    return axios.get('http://api.mediastack.com/v1/news?access_key=3dfefa6bfd4057fdcecf17af3195373a&categories=entertainment&languages=en')
}


export const getTechnology = () =>{

    return axios.get('http://api.mediastack.com/v1/news?access_key=3dfefa6bfd4057fdcecf17af3195373a&categories=technology&languages=en');
    
}