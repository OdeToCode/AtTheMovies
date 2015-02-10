import api from "./reddit-api"
import extract from "./extract-gifs"
import display from "./display-gifs"

api.load()
   .then(extract)
   .then(display);
