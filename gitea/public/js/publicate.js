const STRAPI_TOKEN = '533cb72d2ed17747ca725c10f61020a5b6204b05e66a60577164bb881cecb53f671b1a88dc33c707ebcb36f7a60c917b06b80851e2944beaa22a5977597b63a525d69f75b0e6ae94c90c6422b683b231a452ad7cdf1a4c7ff5d054125153aa6d21a36d4e1cf53f24d8548b26a3badd9048fe041dad600f68bfd5da7bd5ce9665'
const STRAPI_URL = 'http://localhost:1337'

$('#make-public').on('click', function (event) {
  event.preventDefault()

  const self = $(this)
  const xhr = new XMLHttpRequest()

  xhr.open('POST', `${STRAPI_URL}/api/repos`, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Authorization', `bearer ${STRAPI_TOKEN}`)

  xhr.send(JSON.stringify({data: {
      publishedAt: null,
      name: self.data('name'),
      owner: self.data('owner')
  }}))
})