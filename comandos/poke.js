
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("¿Quieres molestarte a ti mismo?, deberias buscar ayuda"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, No me molestes o me apago~ >.<`); // estoo

    const pokeFetch = await fetch("https://nekos.life/api/v2/img/poke"),
      pokeImg = await pokeFetch.json();

    return msg.channel.send({ 
      embed: {
        description: member
          ? `**${msg.member.displayName}** molesta a **${member.username}** >.<`
          : `**${msg.member.displayName}** Debes mencionar a alguien para molestarlo un rato`,
        image: {
          url: member
            ? pokeImg.url
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
  command: "poke",
  aliases: ["poke"]
};
