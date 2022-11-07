import * as prismic from '@prismicio/client'

const endpoint = prismic.getEndpoint('ignews-layrton')
const accessToken = process.env.PRISMIC_ACCESS_TOKEN

export const client = prismic.createClient(endpoint, { accessToken })
