const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member =
    msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
      if (member === msg.author) return msg.channel.send("Ehm.. no te pegues a ti mismo, mejor pegale a Tousy :D"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, auch -llora-`); // estoo

    const slapFetch = await fetch("https://neko-love.xyz/api/v1/slap"),
      slapImg = await slapFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** le dio una bofetada a **${member.username}** auch!`
          : `**${msg.member.displayName}** debes mencionar a alguien para darle una bofetada `,
        image: {
          url: member
            ? slapImg.url
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
  command: "slap",
  aliases: ["slap"]
};
