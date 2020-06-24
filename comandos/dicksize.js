/*

Rueda la maquina para sacar un número determinado
al azar usando Math.random().
números entre 1 al 100
*/

 

let size = Math.floor(Math.random() * 100) + 1;
    
const Discord = require('discord.js');

module.exports = (client, message, args) => { 
  
 
  
    const embed = new Discord.RichEmbed()
      .setThumbnail(client.user.displayAvatarURL)
 //   .setImage("")
      .addField("Tu pepee mide:",
                "**Diametro**:" + longitud,
                "")
    
      .setTitle("Okay, dejame ver -saca la regla-")
      .setColor("#00e059")

      .setFooter(
        "BOT lanzado el 27/10/2019, hora 19:00 PM por 𝑯𝒂𝒕𝒉𝒐𝒓#6741.",
      );
  
    let longitud = [""]

   let captura = longitud[Math.floor(longitud.length * Math.random())];
  
  

    message.channel.send(embed);
  }