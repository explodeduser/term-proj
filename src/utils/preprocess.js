export const changeUrl = (game) => {
  let urlArray = game.cover.url.split("/")
  urlArray.splice(0,2)
  urlArray[4] = 't_1080p'
  game.cover.url = `https://${urlArray.join("/")}`
}