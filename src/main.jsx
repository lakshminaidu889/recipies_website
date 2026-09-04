import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Values from './items.jsx'
import './index.css'
import App from './App.jsx'

// import Instaprofile from './instagram_profile.jsx'
// import Counterapp from './classcomponents/counter.jsx'
// import Counterapp from './functionalcomponents/counter.jsx'
import Customnavbar from './functionalcomponents/Customnavbar.jsx'
import Getproducts from './functionalcomponents/getproducts.jsx'
import Customcarousels from './functionalcomponents/carousels.jsx'


// let items=[
//   {tittle:'nature',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIBdiw1kcoX3jSYgZZgI-XFQT279C77wrn3eYf66tyg&s',followers:"20",following:"30"},
//   {tittle:'hlo',// import Customnavbar from './functionalcomponents/customnavbar.jsx'

// url:'https://hips.hearstapps.com/hmg-prod/images/sunflowers-blooming-against-sky-royalty-free-image-1573171826.jpg?crop=0.8xw:1xh;center,top'>
//   {tittle:'hi',url:'https://hips.hearstapps.com/hmg-prod/images/peony-flower-67ab7733b0f8a.jpg?crop=0.880xw:0.660xh;0.0609xw,0.0144xh&resize=1200:*',followers:"20",following:"30"},
//   {tittle:'future',url:'https://cdn.mos.cms.futurecdn.net/M4uAcZhQ9zWg8RGT9UAEqS.jpg',followers:"20",following:"30"}
  
// ]

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <div style={{display:'flex'}}>
//   {items.map((e)=>Instaprofile(e))} */}
<Customnavbar/>
<Customcarousels/>
<Getproducts/>

      {/* <Counterapp/> */}
    
  </StrictMode>
)
