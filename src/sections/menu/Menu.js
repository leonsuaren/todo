import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import anime from 'animejs';
import { categoryButtonsAnimation, minusButtonAnimation, addPlusButtonAnimation, categoryButtonsAnimationOut, minusButtonAnimationOut, addPlusButtonAnimationOut } from './amine';

import { MenuStyled, MenuHeader, MenuItems, AddTodoPlus, Brand, LogOutButton, LogOutButtonWrapper, AiOutlinePlusStyled, AiOutlineMinusStyled, TodoCategory, CategoryWrapper, AddTodoMinus } from './styled';

const Category = ({ category, index, ...props }) => {
  const [showCategory, setShowCategory] = useState(false); 

  const handleOnMouseEnter = (index) => {
    setShowCategory(true);
  };

  const handleOnMouseLeave = (index) => {
    setShowCategory(false);
  }

  return (
    <TodoCategory showCategory={showCategory} {...props} category={category} index={index} 
    onMouseEnter={() => handleOnMouseEnter(index)}
    onMouseLeave={() => handleOnMouseLeave(index)}
    />
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
          <Category className='category-animation' category={'home'} index={1}/>
          <Category className='category-animation' category={'work'} index={2}/>
          <Category className='category-animation' category={'school'} index={3}/>
          <Category className='category-animation' category={'read'} index={4}/>
          <Category className='category-animation' category={'weekend'} index={5}/>
          <Category className='category-animation' category={'shop'} index={6}/>
          <Category className='category-animation' category={'followup'} index={7}/>
        </CategoryWrapper>
        <AddTodoMinus className='minus-button-animation' onClick={handleOnMinusTodo}><AiOutlineMinusStyled /></AddTodoMinus>
      </MenuItems>
      <LogOutButtonWrapper>
        <LogOutButton onClick={handleOnLogout}>Logout</LogOutButton>
      </LogOutButtonWrapper>
    </MenuStyled>
  )
};