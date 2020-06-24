const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("No puedes acariciarte a ti mismo, pero si te sientes solo ven y yo te acaricio uwu"); // estoo
    if (member === bot.user) return msg.channel.send(`**-se arma uno-**`); // estoo

     let smoke = ["https://tenor.com/es/ver/anime-cigar-smoke-gif-10994976.gif","https://tenor.com/es/ver/gif-15630107.gif","https://tenor.com/es/ver/gif-15630140.gif","https://tenor.com/es/ver/smokey-anime-smoke-gif-14705180.gif"]
     let captura = smoke[Math.floor(smoke.length * Math.random())];
     
    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** fuma con **${member.username}** 🚬`
          : `**${msg.member.displayName}** esta fumando 🚬`,
        image: {
          url: member
            ? captura
            : captura
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
  command: "smoke",
  aliases: ["smoke"]
};
