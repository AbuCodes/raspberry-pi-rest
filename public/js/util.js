var h1 = $('#testh1');
console.log(h1);

var turnon = () => {
  axios({
    method: 'post',
    url: '../toggleLED',
    data: {
      state: 'on'
    }
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

var turnoff = () => {
  axios({
    method: 'post',
    url: '../toggleLED',
    data: {
      state: 'off'
    }
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
