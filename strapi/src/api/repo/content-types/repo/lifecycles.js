const GITEA_TOKEN = '3741d2e8d7a7ea96c4eee8aca177b2770b36f107'
const GITEA_URL = 'http://gitea:3000'

module.exports = {
  async beforeUpdate(event) {
    const id = event.params.where.id
    const service = strapi.service('api::repo.repo')
    const { owner, name } = await service.findOne(id)
    const isPublished = !!event.params.data.publishedAt

    await fetch(`${GITEA_URL}/api/v1/repos/${owner}/${name}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${GITEA_TOKEN}`
      },
      method: 'PATCH',
      body: JSON.stringify({private: !isPublished})
    })
  }
}