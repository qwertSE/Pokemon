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
    })
    .catch((error) => {
      alert("Verifique se o nome ou o número está correto.");
      console.log(error);
    });
}
