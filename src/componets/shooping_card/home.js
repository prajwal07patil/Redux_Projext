import React from 'react'
import './home.css'
import Product from './product'
import Image1 from './images/img5.jpeg';
import Image2 from './images/img0.jpeg';
import Image3 from './images/img1.jpeg';
import Image4 from './images/img8.jpeg';
import Image5 from './images/img3.jpeg';
import Image6 from './images/img4.jpeg';

function Home(){
    return(
        <div>
            <div className="title">Watch Product</div>
        <div className="home">
            
            <div>
            <Product 
                id="1"
                title="The product one is Watch"
                price="50"
                image={Image3}
                />
                
                <Product 
                id="2"
                title="The product one is Watch"
                price="150"
                image={Image2}
                />
                <Product 
                id="3"
                title="The product one is Watch"
                price="100"
                image={Image1}
                />
            </div> 
            <div>
            <Product 
                id="4"
                title="The product one is Watch"
                price="300"
                image={Image4}
                />
                 <Product 
                id="5"
                title="The product one is Watch"
                price="250"
                image={Image5}
                />
                 <Product 
                id="6"
                title="The product one is Watch"
                price="350"
                image={Image6}
                />
            </div>
             
        </div>
        </div>
    )
}
export default Home