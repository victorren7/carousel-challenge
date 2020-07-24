import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {firstGroup, secondGroup} from '../App';

function AllQuoates() {
  const firstQuotes = firstGroup.map((quote, index) => 
    <Grid key={index} gridGap={10}>
      <div>
        {quote.message}
      </div>
      <div>
        {quote.attribution}
      </div>
    </Grid>
  );
  const secondQuotes = secondGroup.map((quote, index) => 
    <Grid key={index} gridGap={10}>
      <div>
        {quote.message}
      </div>
      <div>
        {quote.attribution}
      </div>
    </Grid>
  );

  return (
    <Grid gridGap={60}>
      <Grid gridGap={35}>
        {firstQuotes}
      </Grid>
      <hr style={{width: '800px'}}/>
      <Grid gridGap={35}>
        {secondQuotes}
      </Grid>
    </Grid>

  );
};

const Grid = styled.div`
  display: grid;
  grid-gap: ${prop => prop.gridGap ? prop.gridGap : 0}px;
  margin: 30px auto;
  width: 85%;
  text-align: center;
  font-size: 18px;
`;

export default withRouter(AllQuoates);