const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member =
    msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {

    const nekoFetch = await fetch("https://nekos.life/api/v2/img/neko"),
      nekoImg = await nekoFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** nekos owo!`
          : `**${msg.member.displayName}** nekos owo!`,
        image: {
          url: member
            ? nekoImg.url
            : nekoImg.url
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
  command: "neko",
  aliases: ["neko"]
};
