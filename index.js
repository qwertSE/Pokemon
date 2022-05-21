function pokemon() {
  let id = document.getElementById("find").value;

  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  if (id >= 1 && id <= 649) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.getElementById("pokeinfo").style.display = "block";
        
        document.getElementById("nome").innerHTML = data["name"];
        document.getElementById("numero").innerHTML = data["id"];
        document.getElementById(
          "foto"
        ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
        document.getElementById("foto").style.display = "block";
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("Provavelmente o que você está procurando não existe...");
  }
}
