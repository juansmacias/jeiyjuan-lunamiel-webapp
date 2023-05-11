module.exports = {
  apps : [{
    name: 'JeiJuanLunaMielApp',
    script: 'serve',
    watch: 'build',
    env: {
       PM2_SERVE_PATH: './build',
       PM2_SERVE_PORT: 3000,
       PM2_SERVE_SPA: 'true'
    },
    env_production: {
       REACT_APP_API_URL: 'http://192.168.70.99:3030',
       PM2_SERVE_PATH: './build',
       PM2_SERVE_PORT: 3000,
       PM2_SERVE_SPA: 'true'
}
  }],

  deploy : {
    production : {
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
