import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({ tabIndex: 0 }))`
  border-radius: 20px;
  padding: 0.5rem 5.25rem;
  background-color: #ff4d4d;
  border-color: transparent;
  color: #fff;

  &:hover {
    background-color: #de3f3f;
    color: #fff;
  }
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
