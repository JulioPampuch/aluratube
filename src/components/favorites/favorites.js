import { StyledFavs } from "./favoritesStyled"

const Favs = (props) => {
  const favorites = (props.favorites)

  return (
    <StyledFavs>
      <section>
        <h3>Favoritos Aluratube</h3>
        <div className="favs">
          {favorites.map((favorite, index) => {
            return (
              <div key={index}>
                <a className="fav" href={favorite.channelUrl}>
                  <h4>{favorite.name}</h4>
                  <img className="favsImg" src={favorite.img} />
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </StyledFavs>
  )
}

export default Favs