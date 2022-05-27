import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import anime from 'animejs';
import { categoryButtonsAnimation, minusButtonAnimation, addPlusButtonAnimation, categoryButtonsAnimationOut, minusButtonAnimationOut, addPlusButtonAnimationOut } from './amine';

import { MenuStyled, MenuHeader, MenuItems, AddTodoPlus, Brand, LogOutButton, LogOutButtonWrapper, AiOutlinePlusStyled, AiOutlineMinusStyled, TodoCategory, CategoryWrapper, AddTodoMinus } from './styled';

const Category = ({ category, ...props }) => {
  return (
    <TodoCategory {...props} category={category} />
  )
}

export const Menu = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const navigate = useNavigate();

  const handleOnLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/login');
  }

  const handleOnAddTodo = () => {
    let categoryAnimationIn = anime.timeline(categoryButtonsAnimation).add(minusButtonAnimation).add(addPlusButtonAnimation);
    categoryAnimationIn.play();
  }

  const handleOnMinusTodo = () => {
    let categoryAnimationOut = anime(categoryButtonsAnimationOut);
    let minusTodoButtonAnimation = anime(minusButtonAnimationOut);
    let addTodoPlusButtonAnimation = anime(addPlusButtonAnimationOut);
    categoryAnimationOut.play();
    minusTodoButtonAnimation.play();
    addTodoPlusButtonAnimation.play();
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
        <AddTodoMinus className='minus-button-animation' onClick={handleOnMinusTodo}><AiOutlineMinusStyled /></AddTodoMinus>
      </MenuItems>
      <LogOutButtonWrapper>
        <LogOutButton onClick={handleOnLogout}>Logout</LogOutButton>
      </LogOutButtonWrapper>
    </MenuStyled>
  )
};