document.addEventListener('DOMContentLoaded', function () {
  const zooming = new Zooming({
    bgColor: 'rgb(0, 0, 0)',
    bgOpacity: 0.8,
    customSize: '100%'
  })

  zooming.listen('.img-zoomable')
})


const headers = new Headers({
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
});

const request = new Request('https://4ptmnr3qf5.execute-api.us-east-1.amazonaws.com/production/visitors', {
    headers: headers
});

fetch(request)
.then(response => response.json())
.then(jsonResponse => {
  console.log(jsonResponse);
});
