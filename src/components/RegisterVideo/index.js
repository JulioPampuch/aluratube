import { createClient } from "@supabase/supabase-js"
import { useState } from "react"
import { StyledRegisterVideo } from "./styles"

const PROJECT_URL = "https://ylsagtdoctuuizmvmjwb.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsc2FndGRvY3R1dWl6bXZtandiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNjgxNDUsImV4cCI6MTk4NDc0NDE0NX0.IdGSSxQmldBRFaPi2lHWsdbGlF7KGCOoK3slR3MbN1Y"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function getThumb(urlToFormat) {

  let url = "https://www.youtube.com/watch?v=6fNUO23I_BA"
  const regEx = new RegExp("https://www.youtube.com/watch[?]v=(\\w*)")
  let urlFormated = regEx.exec(urlToFormat)

  if (urlFormated) {
    url = urlFormated[1]
    url = `https://img.youtube.com/vi/${url}/hqdefault.jpg`
    return {
      url
    }
  } else {
    const notFoundImg = ""
    return {
      notFoundImg
    }
  }
}

//Custon hook
function useForm(propsForm) {
  const [values, setValues] = useState(propsForm.initialValue)

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value
      const name = e.target.name

      setValues({
        ...values,
        [name]: value,
      })
    },
    clearForm() {
      setValues({
        "titulo": "",
        "url": ""
      })
    }
  }
}


const RegisterVideo = () => {
  const [formVisivel, setFormVisivel] = useState(false)
  const formCadastro = useForm({
    initialValue: {
      "titulo": "",
      "url": "",
    }
  })

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => { setFormVisivel(true) }}>
        +
      </button>
      {/* Ternário
      Operadores de curto-ciucuito */}
      {formVisivel
        ? (
          <form onSubmit={(e) => {
            e.preventDefault()
            setFormVisivel(false)

            // Contrato entre o Front e o Back-end
            supabase.from("video").insert({
              title: formCadastro.values.titulo,
              url: formCadastro.values.url,
              thumb: getThumb(formCadastro.values.url).url,
              playlist: "Diversos",
            })
              .then((test) => {
                console.log(test);
              })
              .catch((err) => {
                console.log(err);
              })

            formCadastro.clearForm()
          }}>
            <div>
              <button type="button" className="close-modal" onClick={() => { setFormVisivel(false) }}>
                x
              </button>
              <input placeholder="Título do vídeo" name="titulo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} />
              <input placeholder="URL" name="url" value={formCadastro.values.url} onChange={formCadastro.handleChange} />
              <button type="submit">
                Cadastrar
              </button>
              <div className="video-link">
                <a href={formCadastro.values.url} >
                  <img className="video-img" src={getThumb(formCadastro.values.url).url} />
                </a>
              </div>
            </div>
          </form>
        )
        : false}
    </StyledRegisterVideo>
  )
}

export default RegisterVideo
