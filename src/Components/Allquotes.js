import React from 'react';
import data from '../data.json';
import {withRouter} from 'react-router-dom';

function AllQuoates() {
  const firstQuotes = data.map((quote, index) => 
    <div key={index}>
      <div>
        {quote.message}
      </div>
      <div>
        {quote.attribution}
      </div>
    </div>
  );
  const secondQuotes = data.map((quote, index) => 
    <div key={index}>
      <div>
        {quote.message}
      </div>
      <div>
        {quote.attribution}
      </div>
    </div>
  );

  return (
    <div>
      {firstQuotes}
      {secondQuotes}
    </div>

  )
};

export default withRouter(AllQuoates);