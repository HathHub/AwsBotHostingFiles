const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("¿Te insultas a ti mismo?, deberias conseguir ayuda"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, *llora*`); // estoo

    const bakaFetch = await fetch("https://nekos.life/api/v2/img/baka"),
      bakaImg = await bakaFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${member.username}** Baka!!`
          : `**${msg.member.displayName}** Baka!! -n-`,
        image: {
          url: member
            ? bakaImg.url
            : bakaImg.url
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
  command: "baka",
  aliases: ["baka"]
};
