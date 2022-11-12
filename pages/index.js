import React from "react"
import { useState } from "react"
import config from "../config.json"
import Menu from "../src/components/menu/menu"
import Header from "../src/components/header/header"
import Timeline from "../src/components/timeline/timeline"
import Favs from "../src/components/favorites/favorites"


const HomePage = () => {
const [filterValue, setFilterValue] = useState("")
  return (
    <div>
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}></div>
      <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
      <Header />
      <Timeline searchValue={filterValue} playlists={config.playlists} />
      <Favs favorites={config.favorites} />
    </div>
  )
}

export default HomePage