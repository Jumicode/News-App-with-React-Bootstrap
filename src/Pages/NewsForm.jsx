import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewsForm = ({getAllNews}) => {
    return (
        <div>
  
<Form  className="d-flex"  onSubmit={getAllNews}>

<Form.Control 

 type='text'
 name='news'
 placeholder='Search News'
 className="me-2"
 >
 
</Form.Control>
 <Button type='submit'  variant="outline-success">Search</Button>

</Form>






        </div>
    );
}

export default NewsForm;


<input type='submit' value='search'></input>

