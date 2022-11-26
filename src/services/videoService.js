import { createClient } from "@supabase/supabase-js"


const PROJECT_URL = "https://ylsagtdoctuuizmvmjwb.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsc2FndGRvY3R1dWl6bXZtandiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNjgxNDUsImV4cCI6MTk4NDc0NDE0NX0.IdGSSxQmldBRFaPi2lHWsdbGlF7KGCOoK3slR3MbN1Y"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export const VideoService = () => {
  return {
    getAllVideos() {
      return supabase.from("video")
        .select("*")
    }
  }
}