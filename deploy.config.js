module.exports = {
    name: 'classto',
    script: 'npx',
    interpreter: 'none',
    args: 'serve public/ -p 80', 
    instances : 'max',
    exec_mode : 'cluster'
  };