import { Fragment } from "react"
import Header from "../src/components/header/header"
import Timeline from "../src/components/timeline/timeline"
import config from "../config.json"
import { CSSReset } from "../src/components/CSSReset"

const HomePage = () => {
  return (
    <div>
      <CSSReset />
      <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}></div>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists} />
    </div>
  )
}

export default HomePage