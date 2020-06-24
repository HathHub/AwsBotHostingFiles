const Discord = require("discord.js");
const google = require("google-it");


module.exports = (client, message, args) => {

google.resultsPerPage = 1
google.protocol = 'https'
let contandor = 0;
let text = args.join(" ")
let iconGoogle = "https://cdn2.iconfinder.com/data/icons/social-media-8/512/Chrome.png";

google(text, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return message.channel.send('No se encontraron resultados.');
      }
      if (link.href == null)    {
       return message.channel.send('No se encontraron resultados.');
      }

      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Resultados De La Busqueda ${text}`)
        .setColor('#F4B400')
        .setThumbnail(iconGoogle)
        .addField('Sitio Web', link.title)
        .addField('Descripcion', link.description)
        .addField('URL', link.href);

        message.channel.send(gEmbed);
    }

    if (contandor < 1) {
      contandor += 1
      if (res.next) res.next()
    }
  })
  }