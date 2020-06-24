
const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");
const cooldown = new Set();

module.exports = (client, message, args) => { 
  
let map = message.guild.roles.cache.map(r => `${r}`).join(' ').slice(10) || "None"
var server = message.guild; //Definimos server
    let guild = message.guild; //Definimos guild
    let verifLevels = [
        "Ningúno",
        "Bajo",
        "Medio",
        "Alto",
        "Muy alto"
      ],// Etos son los niveles de verificaciÃ³n del servidor
      region = {
        europe: "Europa :flag_eu:",
        brazil: "Brasil :flag_br: ",
        hongkong: "Hong Kong :flag_hk:",
        japan: "Japón :flag_jp:",
        russia: "Rusia :flag_ru:",
        singapore: "Singapur :flag_sg:",
        southafrica: "Sudáfrica :flag_za:",
        sydney: "Sydney :flag_au:",
        "us-central": "Central US :flag_us:",
        "us-east": "Este US :flag_us:",
        "us-south": "Sur US :flag_us:",
        "us-west": "Oeste US :flag_us:",
        "vip-us-east": "VIP US Este :flag_us:",
        "eu-central": "Europa Central :flag_eu:",
        "eu-west": "Europa Oeste :flag_eu:",
        london: "London :flag_gb:",
        amsterdam: "Amsterdam :flag_nl:",
        india: "India :flag_in:"
      };
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  let createdAt = moment(message.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 

 
 .setTitle(`Server Info`)
 .addField("Nombre:", message.guild, false)
 .addField("ID:", message.guild.id)
 .addField("Creador:", owner.tag)
 .addField("Miembros", message.guild.members.cache.filter(u => !u.user.bot).size)
 .addField("Bots :", message.guild.members.cache.filter(u => u.user.bot).size)
 .addField(`_Region_:`, `**${region[guild.region]}**`)
 .addField("Fecha de creación:", createdAt)
 .addField("Cantidad de canales:", message.guild.channels.cache.size)
 .addField(`Roles:`, 
           map)// Cantidad de roles que tiene el servidor
      .addField(
        `_Nivel de verificación_:`,
        `**${verifLevels[guild.verificationLevel]}**`)
 .setThumbnail(message.guild.iconURL({ dynamic:false , format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}