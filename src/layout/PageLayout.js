import React from 'react';
import { PageLayoutStyle } from './styled';

export const PageLayout = ({ children }) => {
  return (
    <PageLayoutStyle>
      { children }
    </PageLayoutStyle>
  )
}