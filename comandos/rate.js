const Discord = require('discord.js');

module.exports = (client, message, args) => { 
   const embed = new Discord.RichEmbed()
let elementos = ['1','2','3','4','5','6','7','8','9','10'];

let captura = elementos[Math.floor(elementos.length * Math.random())];
  
  

message.channel.send(embed);
}