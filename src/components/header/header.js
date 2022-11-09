import config from "../../../config.json"
import styled from "styled-components"

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .userInfo {
    margin-top: 70px;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;
  }
`

console.log(config.playlists)

const Header = () => {
  return (
    <StyledHeader>
      {/* <img src="" /> */}
      <section className="userInfo">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header