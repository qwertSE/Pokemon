//Variaveis usadas em alguns metodos
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#947900",
  rock: "#a38c21",
  fairy: "#fdb9e9",
  poison: "#b97fc9",
  bug: "#729f3f",
  dragon: "#97b3e6",
  psychic: "#ec91c6",
  flying: "#F5F5F5",
  fighting: "#d56723",
  normal: "#F5F5F5",
  ice: "#51c4e7",
  ghost: "#7b62a3",
  steel: "#9eb7b8",
  dark: "#240101"
};

regex = /\d[0-9]{0,3}/;

// fim

function loadPokemon(id) {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("pokeinfo").style.display = "block";

      document.getElementById("nome").innerHTML = data["name"];
      document.getElementById("numero").innerHTML = `#${data["id"]}`;
      let pic = data["sprites"]["front_default"];
      document.getElementById("foto").setAttribute("src", pic);
      document.getElementById("foto").style.display = "block";
      let tipo = data.types[0].type.name;
      document.getElementById("tipo").innerHTML = tipo;
      document.getElementById("tipo").className = `background-${tipo}`;
      document.getElementById("pokeinfo__card").style.backgroundColor =
        colors[tipo];
    })
    .catch((error) => {
      error();
      console.log(error);
    });
}

function goBackOrNext(value) {
  let numberNow = document.getElementById("numero").innerHTML;
  let result = parseInt(numberNow.match(regex));
  console.log(`O valor de result: ${result}`);
  console.log(`O valor de value: ${value}`);
  if(value==='next'){
    result++;
    
    result <= 898 ? loadPokemon(result) : error();
    
  }else{
    result--;

    result >= 1 ? loadPokemon(result) : error();
  }
}

function error(){
  alert("Ops...talvez esse pokemon não exista aqui ainda. :( ");
}