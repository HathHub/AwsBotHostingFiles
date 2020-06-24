const Discord = require ('discord.js') 
module.exports = (client, message, args) => {
 
  const embeddonar = new Discord.MessageEmbed() 
  .setTitle(`Donar al bot`) 
  .addField("Donar por Patreon", `PRÓXIMAMENTE - aún no están definidas las recompensas al donar [Patreon](https://www.paypal.me/lautarodelapuente)`)
  .addField("Donar por Paypal", `Dona directamente al desarrollador, pero no obtendrás ninguna recompemsa [Paypal](https://www.paypal.me/lautarodelapuente)`)
  message.channel.send({ embed :embeddonar });
} 