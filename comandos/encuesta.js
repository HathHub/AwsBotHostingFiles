const Discord = require('discord.js');
const config = require('../config.js');
module.exports = async (client, message, args) => {

 let encuesta = args.join( ' ' ) // Definimos encuesta para el mensaje que la persona escribe.

    if(!encuesta) return message.channel.send(':pencil: Debes escribir una encuesta a mandar, recuerda que la encuesta se mandara conforme tu la escribas.') // Si no escribes una encuesta te enviara esto el bot.

    
      const embed = new Discord.MessageEmbed() // Creamos el embed
      .setDescription(encuesta)
      .setFooter(message.guild.name, message.guild.iconURL)
      .setTimestamp()
      .setColor(config.color)
      const msg = await message.channel.send(embed)
      await msg.react(":white_check_mark:")
      await msg.react(":x:")
message.channel.send(embed)
  } 
  


