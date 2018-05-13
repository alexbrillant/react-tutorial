import { combineReducers } from "redux"
import users from "./users"
import articles from "./articles"
import { sectionReducer } from "./factories";

const rootReducer = combineReducers({
  users: sectionReducer("USER")(users),
  articles: sectionReducer("ARTICLE")(articles)
})

export default rootReducer
