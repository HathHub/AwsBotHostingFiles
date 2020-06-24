const db = require("megadb");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
const client = new Discord.Client();
module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));
  
  try {
    let guild = message.guild
    if (member === message.author) return message.channel.send("No creo que seas tan flexible"); // estoo
    if (member === bot.user) return message.channel.send("NO, gracias"); // estoo
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
if(!message.channel.nsfw) return message.channel.send('Necesitas estar en un canal Nsfw para hacer eso, por favor ve a <#' + canalnsfw + ">")
    if(!canalnsfw) return message.channel.send('Necesitas estar en un canal Nsfw para hacer eso. [Procura definir un canal NSFW con `-set nsfw (canal)`]')
    let canal = client.channels.cache.get(canalnsfw);
    

    
    const suckFetch = await fetch("https://nekos.life/api/v2/img/bj"),
      suckImg = await suckFetch.json();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le hace una mamada a **${member.username}** owo!`
          : `**${message.member.displayName}** Debes mencionar a alguien para darle sus mamadas`,
        image: {
          url: member
            ? suckImg.url
            : "https://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }
    });
  } catch (err) {
    console.log(err);
    return message.reply("Hubo un error"); // estoo
  }
};
module.exports.config = {
  command: "suck",
  aliases: ["suck"]
};