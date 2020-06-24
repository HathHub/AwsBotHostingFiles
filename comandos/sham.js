const Discord = require("discord.js"); //Requerimos o importamos la libreria Discord.js

module.exports = async (client, message, args) => {
  
  //Diccionario conteniendo los movimientos que puedes hacer
  const moves = { piedra: 0, papel: 1, tijera: 2 };
  
  //Esta funcion es basicamente lo que hace % pero de la forma como lo hace Python, que solo devuelve numeros positivos ya que en javascript devuelve negativos
  function wrapIndex(i, i_max) {
    return ((i % i_max) + i_max) % i_max;
  }

  /*Esta funcion será para determinar el ganador
  se pasa como parametro inputs que es una array (collecion, no sé bien como se dice)
  esta array contiene la eleccion del usuario y de la maquina
  */
  function determine_win(inputs) {
    let i = moves[inputs[0]],
      j = moves[inputs[1]];

    return wrapIndex(i + -j, 3);   //Devuelve 0 si es empate, 1 si el jugador de la izquierda ganó (input[0]) y 2 si el de la derecha ganó (inputs[1])
  }
  
  //Esta funcion es simplemente por estetica, recibe como parametro un string y luego cambia el primer caracter a mayuscula y lo demas lo vuelve en minuscula
  function uppercase_first(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  //Revisamos si no pasó un argumento
  if (!args[0]) return message.reply("Eliga una entre piedra, papel o tijera.");
  
  //Revisamos si el argumento que pasó está en el diccionario moves
  if (!args[0] in moves)
    return message.reply("Elige una opcion valida");

  //Obtenemos las keys de moves, esto nos devuelve una array y luego generamos un numero aleatorio entre 0 y 2 y guardamos el movimiento en la variable
  let machineInput = Object.keys(moves)[Math.floor(Math.random() * 3)];
  
  //Se llama a la funcion determine_win con una array conteniendo el movimiento del usuario y el de la maquina
  let winner = determine_win([args[0], machineInput]);
  
  //Creamos el mensaje embed
  const embed = new Discord.MessageEmbed()
    .setTitle("Piedra, papel o tijera.")
    .addFields(
      {
        name: `${message.author.username} eligió`,
        value: uppercase_first(args[0]),
        inline: true
      },
      {
        name: "Computadora eligió",
        value: uppercase_first(machineInput), 
        inline: true
      }
    )
    .setColor(message.guild.me.displayColor)
    .setFooter(
      "Hecho por ",
      "a"
    );
  
  //Aqui usamos condiciones para así mostrar en el mensaje embed el ganador
  if (winner == 0) {
    embed.setDescription("¡Vaya, hubo un empate!");
    return message.channel.send({ embed });
  } else if (winner == 1) {
    embed.setDescription("¡Has ganado, felicidades!");
    return message.channel.send({ embed });
  } else if (winner == 2) {
    embed.setDescription("¡La computadora ha ganado, suerte para la proxima!");
    return message.channel.send({ embed });
  }
};