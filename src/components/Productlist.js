import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import'../styles/Productlist.css'
import DataTableComponent from './DataTableComponent'
import Item from './item'
import item from './item'
import { AppBar, Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css'
//import { Carousel } from 'react-responsive-carousel'
//import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const Productlist = () => {
  const[product, setProduct]= useState([])
  const[images,setImages]= useState([])
  const breakpoints=[
    {width:1 ,itemsToShow:1},
    {width:550 ,itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200 ,itemsToShow:4}
  ]
  // const firstProduct = product[0];
  
  useEffect(()=>{
        
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        //console.log(response.data);
        let product=response.data;
        setProduct(product);
        //const image= product.image;
        setImages(product.image)
        console.log(product)
        const firstProduct = product[0];
        const productName = firstProduct.title;
    const productDescription = firstProduct.description;
      
    //console.log('Product Name:', productName);
   // console.log('Description:', productDescription);
    })
    .catch(error => console.log(error));
   
  },[])



  return (
    <div className='main'>
       <div>
       <section className='product'>
            <div className='container' >
             
                <div className='row'>

                    <DataTableComponent/>

                  </div>

            </div>
        </section>
{/* <section className='otherProductscarousel'>

<div id="myCarousel" class="carousel slide" data-ride="carousel">

<ol class="carousel-indicators">
<li data-target="#myCarousel" data-slide-to="0" class="active"></li> */}
{/* <li data-target="#myCarousel" data-slide-to="1"></li>
<li data-target="#myCarousel" data-slide-to="2"></li> */}
{/* </ol>

<div class="carousel-inner">
<div class="carousel-item active">
{ product.map((URL,index)=>(
                   
                   <img style={{width:"200px", height:"100px"}} alt="sample" src={URL.image} key={index}/>
                  
       ))
     }


</div>

</div>

 <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
<span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#myCarousel" data-slide="next">
<span class="carousel-control-next-icon"></span>
</a>
</div>

</section> */}

    {/* <section className='otherProducts'> 
       <div className='carouselDiv'>
       <Carousel useKeyboardArrows={true} showArrows={true} >
                        { product.map((URL,index)=>(
                   
                    // <img alt="sample" src={URL.image} key={index}/>
                    <img className='slide' alt="sample" src={URL.image} key={index}/>
                  
        ))
      }
              
         </Carousel>
       </div>

      </section> */}
     

     <Carousel fade>
      {product.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image.image} alt={image.alt} style={{width:"50%", height:"300px"}} />
        </Carousel.Item>
      ))}
    </Carousel>





       </div>
     <div>
     <section className='socialMediaFooter'>
     <div class="container-fluid">
<div className='footer'>
        <AppBar
         sx={{textAlign:'center', bgcolor:'black', color: 'white', p:2, top: 'auto', bottom: 0}} >
          <Box sx={{my: 2, 
              "& svg":{ 
                  fontSize:"40PX",
                  cursor:"pointer",
                  mr:2 },
                  "& svg:hover":{
                      transform: 'translateX(5px)',
                      transition: 'all 400ms'
                  }}} >
              {/* Icons */ }
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <WhatsAppIcon />
          </Box>
          <Typography variant='h6'>
              All Rights Reserved &copy; *******
          </Typography>
        </AppBar>
      </div>
      </div>

        </section>
       
     </div>

    </div>
  )
}

export default Productlist