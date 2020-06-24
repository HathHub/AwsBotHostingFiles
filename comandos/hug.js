const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member =
    msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("¿Como te abrazarias a ti mismo?"); // estoo
    if (member === bot.user) return msg.channel.send("uwu -corresponde el abrazo-"); // estoo

    const hugFetch = await fetch("https://nekos.life/api/v2/img/hug"),
      hugImg = await hugFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** le dio un abrazo a **${member.username}** 💖!`
          : `**${msg.member.displayName}** Debes mencionar a alguien, sí no tienes a quien abrazar puedes abrazarme a mi uwu`,
        image: {
          url: member
            ? hugImg.url
            : "https://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
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
  command: "hug",
  aliases: ["hug"]
};
