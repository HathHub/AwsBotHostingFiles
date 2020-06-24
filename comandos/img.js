const db = require("megadb");
const megadb = require("megadb"); 
const Discord = require('discord.js');
const config = require('../config.js');
 var Weez = require('weez')
 var weez = new Weez.WeezAPI(config.weez)
 
module.exports = async (client, message, args) => { 
  
  
  if(!args[0]){
  
    const embeddefault = new Discord.MessageEmbed()
    .setTitle("Funciones modificadoras de imagen.")
    .setDescription("```Estos son algunos ejemplos:```")
    .addField("`lgtb` -img lgtb (imagen)","Gay, básicamente.")
    .addField("`bob` -img bob (imagen)","Una imagen pintando el avatar de un usuario")
    .addField("`basura` -img basura (imagen)","Dile a un usuario que su foto de perfil es una basura!")
    .addField("`cerebro` -img cerebro (imagen)","Meme subdividido en 4 sobre el cerebro")
    .addField("`coche` -img coche (imagen)","Muestra cual es el mejor camino.")
    .addField("`gru` -img gru (imagen)","Un_clasico.jpg")
    .addField("`drake` -img drake (imagen)","El ejemplo lo dice todo.")
    .addField("`eyes` -img eyes (imagen)","Muestra una imagen con frases a elegir de mal en peor")
    .addField("`logro` -img logro (imagen)","Muestra ese nuevo logro!")
    .addField("`susto` -img susto (imagen)","Muestra una imagen de una persona asustada con un avatar")
    .addField("`trump` -img trump (imagen)","Obten una nueva ley aprobada por Trump!")
    .addField("`triggered` -img triggered (imagen)","pone a tu foto de perfil triggered.")
    .addField("`elegante` -img elegante (imagen)","tipico meme de winnie pooh")
    .addField("`psicopata` -img psicopata (imagen)","tu foto de perfil con dalas psicopata")
    .addField("`perfeccion` -img perfeccion (imagen)","tu perfil es perfecto")
    .addField("`bart` -img bart (imagen)","Muestra a bart soñando con algo en sus manos")
    .addField("`olvido` -img olvido (imagen)","Muestra a wolverine recordandote")
    .addField("`arte` -img arte (imagen)","El profesor crocker les mostrara verdadera arte")
    
  
    message.channel.send(embeddefault)

}else if(args[0].toLowerCase() == "gay"){
  
  let user = message.mentions.users.first() || message.author 
  let img = await weez.rainbow(user.avatarURL) 
 
  message.channel.send(new Discord.RichEmbed()
                     .attachFiles([{
                     attachment: img,
                     name: "img.jpg"
                      }])
                    .setColor("RANDOM")
                    .setImage("attachment://img.jpg")
                    .setFooter(message.author.tag))
  
}else if(args[0].toLowerCase() == "logs"){
  


  
  
  }else if(args[0].toLowerCase() == "nsfw"){
 
    
    }
  }