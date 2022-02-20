let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "./imgs/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "./imgs/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "./imgs/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "./imgs/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "./imgs/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "./imgs/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "./imgs/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "./imgs/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "./imgs/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "./imgs/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "./imgs/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "./imgs/uranus.svg",
  },
];

const myDiv$$ = document.querySelector("div");
const score = document.querySelector('[data-function="score"]');
const attempts = document.querySelector('[data-function="attempts"]');
const universo$$ = "./imgs/universe.svg";
const check$$ = "./imgs/tick.svg";

let cartasLevantadas = 0;
let carta1 = "";
let carta2 = "";
let img1;
let img2;
let cartaAnterior;
let intentos = 0;
let puntos = 0;

const cartasOrdenadasRandom = cardArray.sort(ordenar);

function ordenar(a, b) {
  return 0.5 - Math.random();
}

for (const card of cartasOrdenadasRandom) {
  const img$$ = document.createElement("img");

  img$$.setAttribute("src", universo$$);
  img$$.classList.add("universo");

  img$$.addEventListener("click", () => darVuelta(card, img$$));

  myDiv$$.appendChild(img$$);
}

function darVuelta(carta, img$$) {
  const imgs = document.querySelectorAll(".universo");

  if (img$$.className === "universo") {
    if (cartasLevantadas === 0) {
      cartasLevantadas++;
      carta1 = carta;
      img1 = img$$;
      cartaAnterior = carta;
      img$$.setAttribute("src", carta.img);
    } else if (cartasLevantadas === 1 && cartaAnterior !== carta) {
      cartasLevantadas++;
      carta2 = carta;
      img2 = img$$;
      img$$.setAttribute("src", carta.img);
      comparar(carta1, carta2, img1, img2);
    }
  } else {
    alert("Ya has seleccionado la carta.");
  }
}

const comparar = (carta1, carta2, img1, img2) => {
  intentos++;
  attempts.textContent = intentos;

  setTimeout(() => {
    if (carta1.name === carta2.name) {
      img1.setAttribute("src", check$$);
      img2.setAttribute("src", check$$);
      img1.classList.remove("universo");
      img2.classList.remove("universo");
      puntos++;
      score.textContent = puntos;

      if (puntos === 6) {
        alert("Has ganado!");
      }
    } else {
      img1.setAttribute("src", universo$$);
      img2.setAttribute("src", universo$$);
    }
  }, 1000);

  cartasLevantadas = 0;
};
