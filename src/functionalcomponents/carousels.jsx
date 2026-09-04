

import Carousel from 'react-bootstrap/Carousel';



function Customcarousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <h3>Second slide label</h3>
        <Carousel.Caption>
          <h3> slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img style={{width:"70vw",height:"60vh"}} src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"/>
        <h3>Second slide label</h3>
        <Carousel.Caption>
          <h3> slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img style={{width:"70vw",height:"60vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MV0nCkEijSwpXdLfBQA9yDExZPATv5U8TCzF6XOdtQ&s=100"/>
        <h3>Third slide label</h3>
        <Carousel.Caption>
          
      
        </Carousel.Caption>
      </Carousel.Item>
      <img style={{width:"70vw",height:"60vh"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRh8KkY-ql4TFVdtu4ns8EDbuPRhE35GGYnqHQQZcWWIF5gubvQrc7I_Jq&s=10"/>
      
    </Carousel>
  );
}

export default Customcarousels;