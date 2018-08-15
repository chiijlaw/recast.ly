var searchYouTube = (option, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {key: option.key, q: option.query, maxResults: option.max, part: 'snippet', type: 'video', videoEmbeddable: 'true'}
  }).done((data) => (callback(data.items))).fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};

window.searchYouTube = searchYouTube;
