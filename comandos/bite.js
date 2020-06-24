const Discord = require("discord.js");


module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("No deberias morderte a ti mismo unu"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, *auuch*,`); // estoo

     let bite = ["https://tenor.com/es/ver/anime-bite-anime-bite-angry-angry-bite-gif-14720869.gif","https://tenor.com/view/vampire-bite-fangs-diabolik-lovers-feed-gif-5384805.gif"]

     let captura = bite[Math.floor(bite.length * Math.random())];
     
    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** muerde a **${member.username}** owo!`
          : `**${msg.member.displayName}** Debes mencionar a alguien, si no tienes con quien comete un helado mejor, ¿No?`,
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
  command: "bite",
  aliases: ["bite"]
};
