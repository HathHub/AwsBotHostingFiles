
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member =
    msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {

    const waifuFetch = await fetch("https://neko-love.xyz/api/v1/waifu"),
      waifuImg = await waifuFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** waifus uwu!`
          : `**${msg.member.displayName}** waifus uwu!`,
        image: {
          url: member
            ? waifuImg.url
            : waifuImg.url
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
  command: "waifu",
  aliases: ["waifu"]
};
