import styled from "styled-components"

export const NavHeader = styled.div`
  margin-bottom: 8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  place-items: center;
`
export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  /* margin-left: 3rem; */
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
`
export const LogoImage = styled.img`
  max-width: 350px;
`
export const BasketButton = styled.button`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0.25rem;
  font-size: 0.75rem;
  background-color: turquoise;
  font-weight: bold;
  border: none;
  width: 125px;
  border-radius: 10px;
  text-transform: uppercase;
  align-self: center;
  margin: 0 1rem;
`
