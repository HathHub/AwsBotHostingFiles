const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("No puedes acariciarte a ti mismo, pero si te sientes solo ven y yo te acaricio uwu"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, *awwwww*, que lindo -corresponde-`); // estoo

    const kissFetch = await fetch("https://nekos.life/api/v2/img/pat"),
      kissImg = await kissFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** acarició a **${member.username}** uwu!`
          : `**${msg.member.displayName}** Debes mencionar a alguien, si no tienes con quien ven y yo te acaricio uwu`,
        image: {
          url: member
            ? kissImg.url
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
  command: "pat",
  aliases: ["pat"]
};
