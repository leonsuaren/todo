import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListTodoContext } from './../../context';

import anime from 'animejs';
import { categoryButtonsAnimation, minusButtonAnimation, addPlusButtonAnimation, categoryButtonsAnimationOut, minusButtonAnimationOut, addPlusButtonAnimationOut } from './amine';

import {
  MenuStyled, MenuHeader, MenuItems, AddTodoPlus, Brand, LogOutButton, LogOutButtonWrapper, AiOutlinePlusStyled, AiOutlineMinusStyled,
  TodoCategory, CategoryWrapper, AddTodoMinus, SearchTodos, SerarchTodoButtons, SortButtonComponent
} from './styled';

const Category = ({ category, index, children, ...props }) => {
  const [showCategory, setShowCategory] = useState(false);

  const handleOnMouseEnter = (index) => {
    setShowCategory(true);
    anime({
      targets: '.category-text-animation',
      opacity: 0,
      delay: 6000
    })
  };

  const handleOnMouseLeave = (index) => {
    setShowCategory(false);
  }


  return (
    <TodoCategory showCategory={showCategory} {...props} category={category} index={index}
      onMouseEnter={() => handleOnMouseEnter(index)}
      onMouseLeave={() => handleOnMouseLeave(index)}
    >{showCategory ? <span className='category-text-animation'>{children}</span> : ''}</TodoCategory>
  )
}

const SortButton = ({ category, index, children, ...props }) => {
  return (
    <SortButtonComponent category={category}>{children}</SortButtonComponent>
  )
}

export const Menu = () => {
  const listTodoContext = useContext(ListTodoContext);
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
          className='add-plus-button-animation'
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
          onClick={handleOnAddTodo}
        >
          <AiOutlinePlusStyled mouseenter={mouseEnter} />
        </AddTodoPlus>
        <CategoryWrapper>
          <Category className='category-animation' category={'home'} index={1}>home</Category>
          <Category className='category-animation' category={'work'} index={2}>work</Category>
          <Category className='category-animation' category={'school'} index={3}>school</Category>
          <Category className='category-animation' category={'read'} index={4}>read</Category>
          <Category className='category-animation' category={'weekend'} index={5}>weekend</Category>
          <Category className='category-animation' category={'shop'} index={6}>shop</Category>
          <Category className='category-animation' category={'followup'} index={7}>follow up</Category>
        </CategoryWrapper>
        <AddTodoMinus
          className='minus-button-animation'
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
          onClick={handleOnMinusTodo}><AiOutlineMinusStyled mouseenter={mouseEnter} /></AddTodoMinus>
      </MenuItems>
      <SearchTodos>
        <SerarchTodoButtons>
          <SortButtonComponent status={'inProcess'} onClick={() => {listTodoContext.handleOnFindStatus('inProcess')}}>IN PROCCESS</SortButtonComponent>
          <SortButtonComponent status={'higth'} onClick={() => {listTodoContext.handleOnFindStatus('higth')}}>HIGTH PRIORITY</SortButtonComponent>
          <SortButtonComponent status={'stuck'} onClick={() => {listTodoContext.handleOnFindStatus('stuck')}} >STUCK</SortButtonComponent>
          <SortButtonComponent status={'less'} onClick={() => {listTodoContext.handleOnFindStatus('less')}} >CAN WAIT</SortButtonComponent>
          <SortButtonComponent status={'done'} onClick={() => {listTodoContext.handleOnFindStatus('done')}} >DONE</SortButtonComponent>
        </SerarchTodoButtons>
      </SearchTodos>
      <LogOutButtonWrapper>
        <LogOutButton onClick={handleOnLogout}>Logout</LogOutButton>
      </LogOutButtonWrapper>
    </MenuStyled>
  )
};