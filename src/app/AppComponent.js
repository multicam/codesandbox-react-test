import React from "react";
import styled from "styled-components";

const MainStyle = styled.main`
  height: 100vh;
  display: grid;
`;

export default props => {
  return (
    <main>
      <header />
      <aside />
      <footer />
      <article />
      <div class="extra">-</div>
    </main>
  );
};
