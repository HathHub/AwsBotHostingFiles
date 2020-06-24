const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member =
    msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author)
      return msg.channel.send("¿Como te harias cosquillas a ti mismo?"); // estoo
    if (member === bot.user)
      return msg.channel.send("**JAJAJA** Paraa.."); // estoo

    const tickleFetch = await fetch("https://nekos.life/api/v2/img/tickle"),
      tickleImg = await tickleFetch.json();

    return msg.channel.send({
      embed: {
        description: member
          ? `${msg.member.displayName} le hace cosquillas a ${member.username}`
          : `${msg.member.displayName} Debes mencionar a alguien -w-`,
        image: {
          url: member
            ? tickleImg.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: msg.guild ? msg.guild.me.displayColor : ("#00e059")
      }
    });
  } catch (err) {
    console.log(err);
    return msg.reply("Hubo un error"); // estoo
  }
};
module.exports.config = {
  command: "tickle",
  aliases: ["tickle"]
};