import React, { useEffect } from "react"
import { useState } from "react"
import config from "../config.json"
import Menu from "../src/components/Menu/menu"
import Header from "../src/components/Header/index"
import Timeline from "../src/components/Timelinee/timeline"
import Favs from "../src/components/Favoritess/index"
import { VideoService } from "../src/services/videoService"



const HomePage = () => {
  const service = VideoService()
  const [playlists, setPlaylist] = useState({})

  useEffect(() => {
    service.getAllVideos()
      .then((dados) => {
        const novasPlaylists = { ...playlists }
        dados.data.forEach((video) => {
          if (!novasPlaylists[video.playlist]) {
            novasPlaylists[video.playlist] = []
          }
          novasPlaylists[video.playlist]?.push(video)
        })
        setPlaylist(novasPlaylists)
      })
  }, [])

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
      <Timeline searchValue={filterValue} playlists={playlists} />
      <Favs favorites={config.favorites} />
    </div>
  )
}

export default HomePage