
const $gifs = $("#gifs");
const $search = $("#search");
function addGif(res) {
    let gifResults = res.data.length;
    if (gifResults) {
      let randomIdx = Math.floor(Math.random() * gifResults);
      let $newCol = $("<div>", { class: " container-fluid" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGif);
      $gifs.prepend($newCol);
    }
  }

  $("#form").on("submit", async function(evt) {
    evt.preventDefault();
  
    let searchTerm = $search.val();
    $search.val("");
  
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "IO9MLBYOkJ44It4E8X7EFO57TCyGgsTz"
      }
    });
    addGif(response.data);
  });



  $("#remove").on("click", function() {
    $gifs.empty();
  });

