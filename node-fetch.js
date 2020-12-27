const Discord = require("discord.js")

const hama = new Discord.Client();

const fetch = require("node-fetch")

hama.on("ready", () => {

  console.log(hama.user.tag)

})

setInterval(() => {

fetch("https://thorn-aspiring-muenster.glitch.me").then(console.log("hosted"))

}, 60000)