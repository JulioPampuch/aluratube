import config from "../../../config.json"
import { StyledTimeline } from "./styleTimeline"

const Timeline = (props) => {
  const playlistsNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName]
        return (
          <section key={index}>
            <h2 >{playlistName}</h2>
            <div>
              {videos.map((video, index) => {
                return (
                  <a key={index} href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

export default Timeline
