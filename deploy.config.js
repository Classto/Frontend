module.exports = {
    name: 'classto',
    script: 'npx',
    interpreter: 'none',
    args: 'serve public/ -p 8080', 
    instances : '1',
    exec_mode : 'cluster'
  };