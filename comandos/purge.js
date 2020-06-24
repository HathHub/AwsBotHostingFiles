module.exports = async (message, args) => {

let member ;
/*
el usuario puede escribir el nombre de usuario, ID o puede mencionar a un usuario
*/
  if(args[0]) member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(p => p.user.username.startsWith(args[0]))//aquí obtenemos el usuario 
  
  let cantidad = member && !isNaN(args[1]) ? args[1] : !isNaN(args[0]) ? args[0] : 50
/*
si en member hay datos y el argumento siguiente es un número tomará ese número, si no se cumple toma el argumento 0 revisando que este sea un numero si no lo es o no hay argumento uno este se establece a 50
*/
  const messages = await message.channel.messages.fetch({limit: 200})//obtenemos los últimos 200 mensajes enviados al canal
  
  let filtro = member ? m => m.author.id == member.id && !m.pinned && !m.system : m => !m.pinned && !m.system
/*
si hay un usuario filtra los mensajes ese usuario,  que no estén fijados y que no sean del sistema, si no hay solo filtra que no estén fijados y que no sean del sistema 'Discord'
*/
  let msg = messages.filter(filtro)//hacemos el filtro a messages que es la variable donde están todos los mensajes
  
  if((msg).array().length < 1)return message.channel.send('No hay mensajes para eliminar')
 /*
nos aseguramos que msg tenga mensajes para eliminar
*/
  message.channel.bulkDelete((msg).array().slice(0,cantidad), true).then(m => {
    message.channel.send(`🛰 se han eliminado ${msg.array().slice(0, cantidad).length}`)
  })
  }

/*
ahora a eliminar los mensajes, usamos '(msg).array()' obviamente para pasar los datos a un array y así poder usar 'slice()' para tomar desde 0 hasta la cantidad dada por el usuario o establecida anteriormente
*/