const Discord = require ('discord.js')
module.exports = async (client, message, args) => {
  
  let mencionado = message.mentions.users.first()
  
  let insulto1 = ["Dique contenedor", "Represa", "Almacén", "Catarata", "Cementerio", "Termotanque", "Container", "Océano", "Bidón", "Silobolsa", "Bombonera", "Genocida", "Agujero Negro", "Camión volquete", "Transatlantico", "Galaxia", "Coliseo", "Sicario", "Archipielago"] 
  let captura1 = insulto1[Math.floor(insulto1.length * Math.random())] 
          
  let insulto2 = ["achuras", "chinchulines", "grasas trans", "mollejas", "grasas saturadas", "harinas", "pedos fétidos", "carbohidratos", "rabas", "mondongo", "morcillas", "lípidos", "canelones", "triglicéridos", "colesterol", "chacinados", "guisos", "mantecol", "ravioles"] 
  let captura2 = insulto2[Math.floor(insulto2.length * Math.random())]
  
  const embed = new Discord.MessageEmbed()
  .addField(`Insulto Generado`, `<@!${mencionado.id}>` + ` es un gordo ` + captura1 + ` de ` + captura2) 
  .setThumbnail("https://cdn.discordapp.com/attachments/676920312771903489/722736295478165505/IMG-20200617-WA0052.jpg")
  message.channel.send(embed) 
}