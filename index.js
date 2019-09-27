const Discord = require("discord.js");
const bot = new Discord.Client();

const token = process.env.token;

var version = process.env.version

bot.on("ready", () =>{
    console.log("Der Bot ist Online auf der Version " + version + "! Bitte überprüfe die Funktionen, da der Bot noch in einer Testphase ist.")
} )

bot.login(token);