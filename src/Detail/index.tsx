import React from 'react';
import { useParams } from 'react-router';

const Detail:React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Header working</p>
      <p>
        Id value is
        {' '}
        {id}
      </p>
    </div>
  );
};

export default Detail;
