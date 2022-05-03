import React from 'react';
import { TodoHeaderWrapper, Img, BackGroundCover } from './styled';

export const TodoHeader = () => {
  return (
    <TodoHeaderWrapper>
      <BackGroundCover>
      <h1>todo</h1>
      </BackGroundCover>
      <Img src='mountains.jpeg'/>
    </TodoHeaderWrapper>
  )
}