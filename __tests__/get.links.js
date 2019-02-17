const app = require('../app')
const agent = require('supertest').agent(app.callback())

const SERVERS_ENDPOINT_LINK = `http://www.portaltransparencia.gov.br/servidores/:id`
const DATA_SOURCE_LINK = `http://www.portaltransparencia.gov.br/download-de-dados/servidores`
const API_REPO_LINK = `https://github.com/AkatsukiJS/opacity-project-api`
const REMUNERATION_DICT_LINK = `http://www.portaltransparencia.gov.br/pagina-interna/603423-dicionario-de-dados-servidores-remuneracao`
const REGISTER_DICT_LINK = `http://www.portaltransparencia.gov.br/pagina-interna/603422-dicionario-de-dados-servidores-cadastro`

describe('[ GET ]:: Links', () => {
  it('should be correct links', async () => {
    const response = await agent.get('/links')

    const {      
      links: {
        data_source,
        api_repository,
        servers_endpoint,
        remuneration_dictionary,
        register_dictionary
      }
    } = response.body

    expect(data_source).toEqual(DATA_SOURCE_LINK)
    expect(api_repository).toEqual(API_REPO_LINK)
    expect(servers_endpoint).toEqual(SERVERS_ENDPOINT_LINK)
    expect(remuneration_dictionary).toEqual(REMUNERATION_DICT_LINK)
    expect(register_dictionary).toEqual(REGISTER_DICT_LINK)
  })
})
