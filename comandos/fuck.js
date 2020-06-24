const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = async (bot, msg, args) => {
  var member = msg.mentions.users.first() || msg.guild.members.get(args.join(" "));

  try {
    if (member === msg.author) return msg.channel.send("Ehm... para eso, usa mejor -masturbate, ¿No?"); // estoo
    if (member === bot.user) return msg.channel.send(`**${msg.member.displayName}**, Conmigo no..qwq`); // estoo
  
    if(!msg.channel.nsfw) return msg.channel.send('Necesitas estar en un canal Nsfw para hacer eso <:PoohMamadisimoPorMiel_NRC:640240069252481044>, por favor ve a <#637133413203181570>')
    const fuckFetch = await fetch("https://nekos.life/api/v2/img/classic"),
      fuckImg = await fuckFetch.json();
  msg.delete()
    return msg.channel.send({
      embed: {
        description: member
          ? `**${msg.member.displayName}** se folló a **${member.username}** owo!`
          : `**${msg.member.displayName}** Debes mencionar a alguien, si no tienes con quien ven usa -masturbate`,
        image: {
          url: member
            ? fuckImg.url
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
  command: "fuck",
  aliases: ["fuck"]
};
