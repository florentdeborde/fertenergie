import { Carousel } from 'react-carousel-minimal';

function MinimalCarousel({ data, width, height, maxWidth, maxHeight }) {
     const captionStyle = {
       fontSize: '2em',
       fontWeight: 'bold',
     }
     const slideNumberStyle = {
       fontSize: '20px',
       fontWeight: 'bold',
     }
     return (
       <div className="App">
         <div style={{ textAlign: "center" }}>
           {/* 
           <h2>React Carousel Minimal</h2>
           <p>Easy to use, responsive and customizable carousel component for React Projects.</p> 
           */}
           <div>
             <Carousel
               data={data.map(item => ({
                ...item,
                src: <img src={item.src} loading="lazy" alt={item.alt} />
              }))}
               time={5000}
               width={width}
               height={height}
               captionStyle={captionStyle}
               radius="0px" // 10px
               slideNumber={false}  // to show/hide image number
               slideNumberStyle={slideNumberStyle}
               captionPosition="top"
               automatic={true}
               dots={true}
               pauseIconColor="white"
               pauseIconSize="40px"
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               thumbnails={false} // to show/hide images under carousel
               thumbnailWidth="100px"
               style={{
                 textAlign: "center",
                 maxWidth: maxWidth,
                 maxHeight: maxHeight,
                 margin: "auto",
               }}
             />
           </div>
         </div>
       </div>
     );
   }
   
   export default MinimalCarousel;