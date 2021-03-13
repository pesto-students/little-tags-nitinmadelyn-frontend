import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className="amount-btns">
      <h3>Quantity: </h3>
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <p className="amount">{amount}</p>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 2vw;
  }
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: #eee;
    border-radius: 5px;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
    margin-left: 2vw;
  }
  button:hover {
    background-color: rgb(241, 94, 45);
  }

  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
