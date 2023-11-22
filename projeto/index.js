const nome = "Juggernaut";
const xp = 10000;


switch (xp) {
  case xp < 1000:
    // Nível de Ferro
    console.log(`O Herói de nome ${nome} está no nível de Ferro`);
    break;
  case xp >= 1001 && xp <= 2000:
    // Nível de Bronze
    console.log(`O Herói de nome ${nome} está no nível de Bronze`);
    break;
  case xp >= 2001 && xp <= 5000:
    // Nível de Prata
    console.log(`O Herói de nome ${nome} está no nível de Prata`);
    break;
  case xp >= 6001 && xp <= 7000:
    // Nível de Ouro
    console.log(`O Herói de nome ${nome} está no nível de Ouro`);
    break;
  case xp >= 7001 && xp <= 8000:
    // Nível de Platina
    console.log(`O Herói de nome ${nome} está no nível de Platina`);
    break;
  case xp >= 8001 && xp <= 9000:
    // Nível de Ascendente
    console.log(`O Herói de nome ${nome} está no nível de Ascendente`);
    break;
  case xp >= 9001 && xp <= 10000:
    // Nível de Imortal
    console.log(`O Herói de nome ${nome} está no nível de Imortal`);
    break;
  default:
    // Nível de Radiante
    console.log(`O Herói de nome ${nome} está no nível de Radiante`);
    break;
}