/* eslint-disable no-console */
export const getGoogleCloudIAPAuthHeader = async function () {
  // follow this tutorial
  // https://engineering.q42.nl/google-identity-aware-proxy/

  // const jwt = require('jsonwebtoken')
  // const axios = require('axios')

  // const onehourInSeconds = 60 * 60

  // const JWTProperties = {
  //   iss: 'soko-51dd8@appspot.gserviceaccount.com',
  //   aud: 'https://www.googleapis.com/oauth2/v4/token',
  //   iat: Math.floor(new Date().getTime() / 1000),
  //   exp: Math.floor(new Date().getTime() / 1000) + onehourInSeconds,
  //   target_audience:
  //     '1079250023096-9ecq9q30ci0nvdt9jkbkvcbl6lier7kl.apps.googleusercontent.com',
  // }

  // const privateKey =
  //   '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCKC7QOFSgtZFvB\nxIaqjFcFtX9M7S0QGsi8ZaYZsb+cynZJB3mhpBJ9gfB1FLVrW0YUAlmPnwQS19hP\nsjvwiW5Gz2zkxB6sr856bMqeZKbMFPCJTdcC2tImdmFpU0Cet3PY+wz6ulXeAEhX\nh6Cj7dV0yTxG7ulpWEal3fbWWJQauu5Nx/Gndq+jhRM98nfVJxVIVA/p+748SgHc\n5keVDqiHd241CeRXrckT8ECmHsUk6tY245JYEs/+IlZrTV/XWjYBDylHSpz8Wxh9\nS/cEgJVoxUuH+D0TsblDHpYVELCzaWGWcuyiS9w2+k722NOIfWDwmu+7dh8rR2qh\nrN/TIsiVAgMBAAECggEAIxGwDzfOuiFZshMEBwWaAehGy7shDItRXZMRLEvcmq9Q\nd2L/wlGVJO9Cr+uv3vMUDXc/W14RQdw1pqFn2sZ/DlwZlNBB3qrW8ID8xFpbiVL0\nfF0a9y2x33WJb6FntCp0srWsaXG26Kv3tMzOwXZlGMMangaJo2p6oB6QW4mrLlLZ\nLWfVJvKfpJ37vk6s0p5EGuy5qjKtxgkitvejZ5Ob2GguNf2MjSy4q6Jc4jrbzX92\nk2xlohUvSq/uHV14lH+7eolgIe7Sg8kJ0rj6B1vYLE/Y+sgoUE46bNsbBe5zb3CR\nNeXsWDwgIF6U83iCMDwsyKErTLT519EIVugvnn9brQKBgQDC8bzX/Z0DofTIF85F\nO6pWZvMnQQFVvH6XNUuRsiExfut4tyfp+1wB1Bt9gdus9JrnKRj8q/Hl+jLdoefv\nfaoBQfa9x7mr/SrI45ZyqqPhn5lBXNJVWJjG7Nd8xAMb2oaEsU+NSvMXDxUroMtt\nwwInr8xWmX4RHPQhk14qu6hGVwKBgQC1R/JGOjTYIePvYPb1Zbqzc+7C8XTtTwW6\nNciWcEgd/S7oT8XcnJqCtjKE28g8w3GnJAKxIIerDShl3ouG3JjpSnP5uW2JzBHD\npibMSqQ7erDqzn0GnV3h+bBZ/R82YH1einZLBtRISu1AdUJX5+stncXZo18lACZ5\n+ATkn+2c8wKBgQC5UlGyC1kewPIQ3gCrdGMkLE5vPK7mMIEvgezLHsnLYdq8MXHy\nT5BR9LAFilOpggdYRYuJeHRHqqh8ZZQ16gKZm3nTRHFP/SaVPzYg3/NXY/+vUWxq\n0gS65yCbbUN/USicMGtt6JhbjW0UwpFhUQdVbxwUH2rnHd0/pfbZLPh1lQKBgQCF\n1OLBA/HFame7buuDSaInH7yyQM4g8Ej7Kv+2SJiFQ0hhC5u4fgj33Qi42wUeDvAW\nA9jU6X4fQuyDIGQDoVJmUKgEQefjZjvrI/vasHRE0RRRlTXqLz2DOfH+zYdAfsWv\niStBwn3wDRjQkID1IuuV1redMCZqy4ycWQVLv+INDwKBgE34XGzdt2+zVqS32PFB\nR4bEEZs3niz5k0v22HWtu6op7MuuOdfmR+3TOj+cEGbUnBqhCDmYKTYmxo+7S3NC\nmlFSpTTTZKsqWbB+6XT6SOGBoSrh90GyFMwRKvXcsO/CwqEr0bMleYLqeotQIF62\n6Kp9PboHCvrzKswNk4qXbORf\n-----END PRIVATE KEY-----'

  // const generatedToken = jwt.sign(JWTProperties, privateKey, {
  //   algorithm: 'RS256',
  // })

  // const openIDTokenURL = 'https://www.googleapis.com/oauth2/v4/token'
  // let response = {}

  // try {
  //   response = await axios.post(openIDTokenURL, {
  //     grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
  //     assertion: generatedToken,
  //   })
  //   console.log(response)
  //   console.log('')
  //   return response.data.id_token !== undefined ? response.data.id_token : ''
  // } catch (error) {
  //   console.log(error)
  // }

  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  const url = 'https://www.googleapis.com/oauth2/v4/token'
  const targetAudience =
    '1079250023096-9ecq9q30ci0nvdt9jkbkvcbl6lier7kl.apps.googleusercontent.com'

  const { GoogleAuth } = require('google-auth-library')
  const auth = new GoogleAuth()

  async function request() {
    console.info(`request IAP ${url} with target audience ${targetAudience}`)
    const client = await auth.getIdTokenClient(targetAudience)
    const res = await client.request({ url })
    console.info(res.data)
    return res.data.id_token
  }

  try {
    const token = await request()
    return token
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
