// const Bowling = require("./models/Bowling.js");
/*
El juego consta de 10 cuadros como se muestra arriba. 
En cada cuadro, el jugador tiene dos oportunidades para derribar 10 pines. 
La puntuación del cuadro es el número total de pines derribados, más bonificaciones por golpes y repuestos.

Un repuesto es cuando el jugador derriba los 10 pines en dos intentos. 
La bonificación de ese marco es la cantidad de pines derribados por el siguiente rollo.
Entonces, en el cuadro 3 anterior, el puntaje es 10 (el número total derribado) más una bonificación de 5 (el número de bolos derribados en el siguiente lanzamiento).

Un strike es cuando el jugador derriba los 10 pines en su primer intento. 
La bonificación para ese cuadro es el valor de las siguientes dos bolas que se lancen.

En el décimo cuadro, un jugador que lanza un repuesto o golpea puede rodar las bolas adicionales para completar el cuadro.
Sin embargo, no se pueden rodar más de tres bolas en el décimo cuadro.
*/

//let frame = new Frame();
// frame.createFrame();
// frame.setScore(12,2);
// frame.setTotalScore(10, 2);
// frame.printFrame();
// let bowling = new Bowling();
//let arreglo = frame.getFrame();

/*//Logica para tirar los pinos
const pinosTirados = Math.floor(Math.random()*10)+1;
console.log(pinosTirados);

//Logica para los dos tiros
let total = 0;
for(let i=0; i<2; i++)
{
  total = Math.floor(Math.random()*10)+1;
  if(i==1)
  {
    total += Math.floor(Math.random() * 10 - total + 1);
  }
}
console.log(total);
*/
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA xd
// let temp = 0;
// for(let i = 0; i < 10; i++)
// {
//   temp = 0;
//   let temp2 = 0;
//   for(let j=0; j<2; j++)
//   {
//     if(j==1)
//     {
//       temp2= Math.floor(Math.random() * 10);
//       test[0][i][j] = temp2-temp;
//       console.log(temp2-temp)

//     }else
//     {
//       test[0][i][j] = temp = Math.floor(Math.random()*10);
//     }
//   }

//   if(i>=1)
//   {
//     let valorant= 0;
//     valorant = test[1][i-1];
//     temp+= valorant;
//   }
//   test[1][i] = temp;
// }

/*
co-authored-by: Javier_Barreto <javierbarretocp@gmail.com>
co-authored-by: Namoku <mythemc@gmail.com>
Co-authored-by: David-GuzmanD <davidt.guzman10@gmail.com>
Co-authored-by: xManuel007 <maanuu.009@gmail.com>
*/ 

/*
          ⠸⣷⣦⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⠀⠀⠀
          ⠀⠙⣿⡄⠈⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠔⠊⠉⣿⡿⠁⠀⠀⠀
          ⠀⠀⠈⠣⡀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⣰⠟⠀⠀⠀⣀⣀
          ⠀⠀⠀⠀⠈⠢⣄⠀⡈⠒⠊⠉⠁⠀⠈⠉⠑⠚⠀⠀⣀⠔⢊⣠⠤⠒⠊⠉⠀⡜
          ⠀⠀⠀⠀⠀⠀⠀⡽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠩⡔⠊⠁⠀⠀⠀⠀⠀⠀⠇
          ⠀⠀⠀⠀⠀⠀⠀⡇⢠⡤⢄⠀⠀⠀⠀⠀⡠⢤⣄⠀⡇⠀⠀⠀⠀⠀⠀⠀⢰⠀
          ⠀⠀⠀⠀⠀⠀⢀⠇⠹⠿⠟⠀⠀⠤⠀⠀⠻⠿⠟⠀⣇⠀⠀⡀⠠⠄⠒⠊⠁⠀ 
          ⠀⠀⠀⠀⠀⠀⢸⣿⣿⡆⠀⠰⠤⠖⠦⠴⠀⢀⣶⣿⣿⠀⠙⢄⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⢻⣿⠃⠀⠀⠀⠀⠀⠀⠀⠈⠿⡿⠛⢄⠀⠀⠱⣄⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⢸⠈⠓⠦⠀⣀⣀⣀⠀⡠⠴⠊⠹⡞⣁⠤⠒⠉⠀⠀
          ⠀⠀⠀⠀⠀⠀⣠⠃⠀⠀⠀⠀⡌⠉⠉⡤⠀⠀⠀⠀⢻⠿⠆⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠰⠁⡀⠀⠀⠀⠀⢸⠀⢰⠃⠀⠀⠀⢠⠀⢣⠀⠀⠀⠀⠀
          ⠀⠀⠀⢶⣗⠧⡀⢳⠀⠀⠀⠀⢸⣀⣸⠀⠀⠀⢀⡜⠀⣸⢤⣶⠀
          ⠀⠀⠀⠈⠻⣿⣦⣈⣧⡀⠀⠀⢸⣿⣿⠀⠀⢀⣼⡀⣨⣿⡿⠁⠀
          ⠀⠀⠀⠀⠀⠈⠻⠿⠿⠓⠄⠤⠘⠉⠙⠤⢀⠾⠿⣿⠟⠋
*/
