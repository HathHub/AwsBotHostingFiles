const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("¿Acaso quieres besarte a ti mismo?"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, N-no puedo hacerlo >.<`); // estoo

    const kissFetch = await fetch("https://nekos.life/api/v2/img/kiss"),
      kissImg = await kissFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** le dio un beso a **${member.username}** :heart:!`
          : `**${msg.member.displayName}** Debes mencionar a alguien, que no sea a mi o///o`,
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
  command: "kiss",
  aliases: ["kiss"]
};
