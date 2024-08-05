/*fetch("https://pokeapi.co/api/v2/pokemon/ditto")
     .then(response=>{
        if(!response.ok){
            throw new Error("We couldn't fetch this file");
        }
        return response.json();
     })
     .then(data=>{
        console.log(data.name);
     })
     .catch(error=>{
        console.log(error)
     })
*/
/*async function fetchingData(){
    try{
        const response=await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        if(!response.ok){
            throw new Error("Couldn't fetch this URL");
        }
        const data= await response.json();
        console.log(data.id);
    }
    catch(error){
        console.log(error);
    }
}
fetchingData();*/
async function fetching() {
    const choose = document.getElementById("pokemonName").value.toLowerCase(); // Corrected ID to "pokemonName"
    const url = `https://pokeapi.co/api/v2/pokemon/${choose}`;
    const response = await fetch(url);
    try {
        if (!response.ok) {
            throw new Error("Couldn't find this url");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemonImage"); // Corrected ID to "pokemonImage"
        imageElement.src = pokemonSprite;
        imageElement.style.display = "block";
    } catch (error) {
        console.log(error);
    }
}
