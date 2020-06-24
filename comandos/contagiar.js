
 const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("Ehm... para eso, usa mejor -masturbate, ¿No?"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, Conmigo no..qwq`); // estoo
  
    let bite = ["https://i.imgur.com/XAVNWHV.gif", "https://i.imgur.com/QlRNL54.gif", "https://media.giphy.com/media/l4FGo3IonE0SdQYeY/giphy.gif"]
    
     let captura = bite[Math.floor(bite.length * Math.random())];
     
    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** le contagio el coronavirus a **${member.username}** `
          : `**${msg.member.displayName}** Debes mencionar a alguien`,
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
  command: "contagiar",
  aliases: ["contagiar"]
};
