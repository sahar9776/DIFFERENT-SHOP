import React from 'react';
import Skeleton from 'react-loading-skeleton';

function Loading() {
  return (
    <Skeleton className='w-full h-full rounded p-5 mb-3' />
  )
}

export default Loading