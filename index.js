const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#b97fc9',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#ec91c6',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};


function loadPokemon() {
  let id = new String(document.getElementById("find").value).toLowerCase();

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
      document.getElementById("pokeinfo__card").style.backgroundColor = colors[tipo];
    })
    .catch((error) => {
      alert("Verifique se o nome ou o número está correto.");
      console.log(error);
    });
}
