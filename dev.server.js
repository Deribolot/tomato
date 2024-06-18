global.dirname = __dirname;

async function bootstrap() {
  const { createServer } = await import('vite')
  const vite = await createServer({
    configFile: 'vite.config.ts',
    server: {
      port: 3000
    }
  })

  global.vite = vite;
  vite.listen()
}
bootstrap();

