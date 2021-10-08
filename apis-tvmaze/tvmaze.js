
const missingImage = "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg";



async function searchShows(query) {
  let response = await axios.get("http://api.tvmaze.com/search/shows", {
  params: {
   q: query
    }
  });
  let shows = response.data.map(result => {
    let show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : missingImage,
    };
  });
 
  return shows;
}


/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
<img class="card-img-top" src="${show.image}">

           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
 <button class="btn btn-primary get-episodes">Episodes</button>

           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */


async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

  let response = await axios.get("http://api.tvmaze.com/shows", {
    
    params: {
      id: id
      }
    });
    let episodes = response.data.map(episode => ({
      id: episode.id,
      name: episode.name,
      season: episode.season,
      number: episode.number,
    }));
  
return episodes;

  // TODO: return array-of-episode-info, as described in docstring above
}
function populateEpisodes(episodes) {
  const $episodesList = $("#episodes-list");
  $episodesList.empty();
    
  for (let episode of episodes) {
    let $item = $(
      `<li>
         ${episode.name}
         (season ${episode.season}, episode ${episode.number})
       </li>
      `);

    $episodesList.append($item);
  }

  $("#episodes-area").show();
}

$("#shows-list").on("click", ".get-episodes", async function handleEpisodeClick(evt) {
  let showId = $(evt.target).closest(".Show").data("show-id");
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});
