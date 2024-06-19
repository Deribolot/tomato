import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
global.dirname = path.dirname(filename);

async function bootstrap() {
  const { createServer } = await import('vite')
  const vite = await createServer({
    configFile: 'vite.config.ts',
    appType: 'mpa',
    server: {
      port: 3000
    }
  })

  global.vite = vite;
  vite.listen()
}
bootstrap();

