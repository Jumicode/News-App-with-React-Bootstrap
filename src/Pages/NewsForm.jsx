import React from 'react';

const NewsForm = ({getAllNews}) => {
    return (
        <div>
            
<form onSubmit={getAllNews} >
  <input type='text' name='news'  placeholder='Search News'></input>
  <input type='submit' value='search'></input>
</form>





        </div>
    );
}

export default NewsForm;
