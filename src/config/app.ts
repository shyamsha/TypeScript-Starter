type Config = {
  env: string;
  isProd: boolean,
  production: {
    api_endpoint: string
  },
  staging: {
    api_endpoint: string
  },
  development: {
    api_endpoint: string
  }
}

const config: Config = {
  env: "production",
  isProd: process.env.NODE_ENV === "production" || false,
  production: {
    api_endpoint: '/api/v1'
  },
  staging: {
    api_endpoint: 'http://www.mocky.io/v2/5e5623dd3000000f0028e30e'
  },
  development: {
    api_endpoint: ''
  }
}

export default config;
