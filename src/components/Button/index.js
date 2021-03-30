import React from 'react'
import style from './button.module.css'
import PropTypes from 'prop-types';

function Button({title, color, fireEvent}) {
  return (
    <div>
      <button className={`${style.btn} ${style[color]}`}>{title}</button>
    </div>
  )
}
Button.defaultProps ={
  color: 'primary'
}

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired
}
export default Button
