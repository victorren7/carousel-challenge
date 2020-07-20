import React, {Fragment} from 'react';
import Carousel from "@brainhubeu/react-carousel";
import {map, filter, find} from 'lodash';
import "@brainhubeu/react-carousel/lib/style.css";

const Rotator = ({group}) => {
  
  return(
    <div>
      <Carousel arrows infinite>
        {map({group}, (quote, index) => {
          return (
            <Fragment>
              <div className="quote">
                <p>
                  {quote.message}
                </p>
              </div>
              <div className="quote">
                <p>
                  {quote.attribution}
                </p>    
              </div>
            </Fragment>
          )
        })}
      </Carousel>

    </div>
  )
};



export default Rotator;