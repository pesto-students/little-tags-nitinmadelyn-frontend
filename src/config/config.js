let config;
if(window.location.hostname === 'localhost'){
  config = {
    apiEndPoint: "http://localhost:3001"
  }
} else {
  config = {
    apiEndPoint: "https://little-tags-app.herokuapp.com"
  }
}

export default config;