import app from './src/app';

const { SERVICE_PORT } = process.env;

/* start the server */
app.listen(SERVICE_PORT, () => {
  console.log('veio!!!');
  console.log(`Service running on port:${SERVICE_PORT}`);
});
