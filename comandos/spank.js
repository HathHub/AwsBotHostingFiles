const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member =
    msg.mentions.users.first() || msg.guild.members.get(args.join(" ")); 
  try {
    if (member === msg.author) return msg.channel.send("¿Como te nalguearias a ti mismo?"); // estoo
    if (member === bot.user) return msg.channel.send("owo atrevido!"); // estoo

    const spankFetch = await fetch("https://nekos.life/api/v2/img/spank"),
      spankImg = await spankFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** le dio una nalgada a **${member.username}** owo!`
          : `**${msg.member.displayName}** Debes mencionar a alguien para darle su castigo`,
        image: {
          url: member
            ? spankImg.url
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
  command: "spank",
  aliases: ["spank"]
};
