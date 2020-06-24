const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("No puedes acariciarte a ti mismo, pero si te sientes solo ven y yo te acaricio uwu"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, *awwwww*, que lindo -corresponde-`); // estoo

     let bite = ["https://imgur.com/a/oyDVhb6.gif,https://imgur.com/a/bsE3cxW.gif,https://imgur.com/a/F8gC7k1.gif,https://imgur.com/a/27EKTK6.gif,https://imgur.com/a/ST7Y48v.gif,https://tenor.com/es/ver/anime-bite-anime-bite-angry-angry-bite-gif-14720869.gif,https://giphy.com/gifs/hand-neko-YW3obh7zZ4Rj2.gif,https://giphy.com/gifs/food-kawaii-FD7ETsGPEMV8c.gif,https://giphy.com/gifs/kawaii-bite-fhkRUj3BWmMnu.gif,https://tenor.com/view/vampire-bite-fangs-diabolik-lovers-feed-gif-5384805.gif,https://i.imgur.com/wb14mqC.gif","https://i.imgur.com/xKJw3mX.gif","https://pa1.narvii.com/6045/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQlfT9-J26CZPU9agTruvTvSyVEUkB0gtziL8tFc8nMyT6uzk&s"]

     let captura = bite[Math.floor(length * Math.random())];
     
    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** acarició a **${member.username}** uwu!`
          : `**${msg.member.displayName}** Debes mencionar a alguien, si no tienes con quien ven y yo te acaricio uwu`,
        image: {
          url: member
            ? captura
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: msg.guild ? msg.guild.me.displayColor : "#00e059"
      }
    });
  } catch (err) {
    console.log(err);
    return msg.reply("Hubo un error"); // estoo
  }
};
module.exports.config = {
  command: "kill",
  aliases: ["kill"]
};
