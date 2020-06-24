const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member =
    msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {

    const cryFetch = await fetch("https://neko-love.xyz/api/v1/cry"),
      cryImg = await cryFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** esta llorando :c`
          : `**${msg.member.displayName}** esta llorando :c`,
        image: {
          url: member
            ? cryImg.url
            : cryImg.url
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
  command: "cry",
  aliases: ["cry"]
};
