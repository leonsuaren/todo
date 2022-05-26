import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import anime from 'animejs';

import { MenuStyled, MenuHeader, MenuItems, AddTodoPlus, Brand, LogOutButton, LogOutButtonWrapper, AiOutlinePlusStyled, AiOutlineMinusStyled, TodoCategory, CategoryWrapper, AddTodoMinus } from './styled';

const Category = ({ category, ...props }) => {
  return (
    <TodoCategory {...props} category={category} />
  )
}

export const Menu = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleOnLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/login');
  }

  const handleOnAddTodo = () => {
    let categoryAnimation = anime({
      targets: '.category-animation',
      opacity: 1,
      translateY: [-20, 20],
      delay: anime.stagger(100, { grid: [1, 7], from: 'first' }),
      autoplay: false,
    })
    let addTodoPlusButtonAnimation = anime({
      targets: '.add-plus-button-animation',
      opacity: 0,
      delay: 700,
      easing: 'easeInQuart'
    });
    categoryAnimation.play();
    addTodoPlusButtonAnimation.play();
    console.log('hola')
  }

  return (
    <MenuStyled>
      <MenuHeader>
        <Brand>ToDo App</Brand>
      </MenuHeader>
      <MenuItems>
        <AddTodoPlus
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
          onClick={handleOnAddTodo}
          className='add-plus-button-animation'
        >
          <AiOutlinePlusStyled mouseenter={mouseEnter} />
        </AddTodoPlus>
        <CategoryWrapper>
          <Category className='category-animation' category={'home'} />
          <Category className='category-animation' category={'work'} />
          <Category className='category-animation' category={'school'} />
          <Category className='category-animation' category={'read'} />
          <Category className='category-animation' category={'weekend'} />
          <Category className='category-animation' category={'shop'} />
          <Category className='category-animation' category={'followup'} />
        </CategoryWrapper>
        <AddTodoMinus className='animation'><AiOutlineMinusStyled/></AddTodoMinus>
      </MenuItems>
      <LogOutButtonWrapper>
        <LogOutButton onClick={handleOnLogout}>Logout</LogOutButton>
      </LogOutButtonWrapper>
    </MenuStyled>
  )
};