import React from 'react';
import { useParams } from 'react-router';

const Detail = ():JSX.Element => {
  const { id } = useParams();

  return (
    <div>
      <p>Header working</p>
      <p>Id value is {id}</p>
    </div>
  )
}

export default Detail;