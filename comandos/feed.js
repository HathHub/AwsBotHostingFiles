const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("Para eso simplemente usa -eat, ¿No?"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, awww, gracias cielo ^^`); // estoo
  
    const feedFetch = await fetch("https://nekos.life/api/v2/img/feed"),
      feedImg = await feedFetch.json();
  msg.delete()
    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** le da de comer a **${member.username}** 🍨`
          : `**${msg.member.displayName}** Debes mencionar a alguien para alimentarle`,
        image: {
          url: member
            ? feedImg.url
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
  command: "feed",
  aliases: ["feed"]
};
