import config from "../../../config.json"
import styled from "styled-components"
import { Fragment } from "react"

const StyledHeader = styled.div`
  .bannerImg {
    width: 100%;
    height: 280px; 
    object-fit: cover;
  }

  .userInfo {
    margin-top: 20px;
    padding: 0 35px 0 35px;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;
  }
  
  .userImg {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`

console.log(config.playlists)

const Header = () => {
  return (
    <StyledHeader>
      <img className="bannerImg" src={config.bannerUrl} />
      <section>
        <div className="userInfo">
          <img className="userImg" src={`https://github.com/${config.github}.png`} />
          <div>
            <h2>{config.name}</h2>
            <p>{config.job}</p>
          </div>
        </div>
      </section>
    </StyledHeader>
  )
}

export default Header