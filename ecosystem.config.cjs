module.exports = {
  apps: [
    {
      name: 'dara-frontend',
      exec_mode: 'cluster',
      instances: '1',
      script: '.output/server/index.mjs'
    }
  ]
}
