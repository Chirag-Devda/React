import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6cc569;
  height: 72px;

  .logo {
    font-size: 25px;
    font-weight: 800;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  li {
    list-style: none;
    font-size: 18px;
  }
`;
