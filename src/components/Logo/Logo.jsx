import styled from "styled-components";
import React from "react";
export default function Logo() {
  return (
    <Logodiv>
      <img className="loog" alt="logo" src="logo.jpg" />
    </Logodiv>
  );
}

const Logodiv = styled.div`
  position: relative;
  margin: 0;

  .loog {
    width: 150px;
    height: 100%;
  }
`;
