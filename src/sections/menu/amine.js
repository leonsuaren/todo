import anime from 'animejs';

export const categoryButtonsAnimation = {
  targets: '.category-animation',
  opacity: 1,
  translateY: [-20, 20],
  delay: anime.stagger(100, { grid: [1, 7], from: 'first' }),
  autoplay: false,
}

export const minusButtonAnimation = {
  targets: '.minus-button-animation',
  opacity: 1,
  easing: 'easeInQuart'
}

export const addPlusButtonAnimation = {
  targets: '.add-plus-button-animation',
  opacity: 0,
  easing: 'easeInQuart'
}

export const categoryButtonsAnimationOut = {
  targets: '.category-animation',
  opacity: 0,
  translateY: [20, -20],
  delay: anime.stagger(100, { grid: [1, 7], from: 'last' }),
  autoplay: false,
}

export const minusButtonAnimationOut = {
  targets: '.minus-button-animation',
  opacity: 0,
  delay: 500,
  easing: 'easeInQuart'
}

export const addPlusButtonAnimationOut = {
  targets: '.add-plus-button-animation',
  opacity: 1,
  easing: 'easeInQuart'
}