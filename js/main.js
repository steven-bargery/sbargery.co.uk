document.addEventListener('DOMContentLoaded', function () {
  const zooming = new Zooming({
    bgColor: 'rgb(0, 0, 0)',
    bgOpacity: 0.8,
    customSize: '100%'
  })

  zooming.listen('.img-zoomable')
})
