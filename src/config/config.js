let config;
if (window.location.hostname === 'localhost') {
  config = {
    apiEndPoint: 'https://mt6bjbo9yi.execute-api.ap-south-1.amazonaws.com/v1',
  };
} else {
  config = {
    apiEndPoint: 'https://mt6bjbo9yi.execute-api.ap-south-1.amazonaws.com/v1',
  };
}

export default config;
