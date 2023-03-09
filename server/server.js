import fetch from "node-fetch";
import { createServer, resolveConfig } from "vite";
import { resolve } from "path";

const viteConfig = {
  vitePort: 5173,
  distPath: "",
  rootPath: "",
};

const getViteHost = () => {
  return `http://localhost:${viteConfig.vitePort}`;
};

const isStaticFilePath = (path) => {
  return path.match(/\.\w+$/);
};

const serveStaticFiles = async (app) => {
  app.use((req, res, next) => {
    if (isStaticFilePath(req.path)) {
      fetch(`${getViteHost()}${req.path}`).then((response) => {
        if (!response.ok) return next();
        res.redirect(response.url);
      });
    } else {
      next();
    }
  });
};

const startDevServer = async () => {
  const config = await resolveConfig({}, "build");
  viteConfig.distPath = resolve(config.root, config.build.outDir);
  viteConfig.rootPath = config.root;

  const server = await createServer({
    clearScreen: false,
    server: { port: viteConfig.vitePort },
  });
  await server.listen();
  server.printUrls();
};

/** Muestra el layout del build o el de desarrollo */
const handleRedirect = async (_req, res, next) => {
  res.sendHTML = (path) => {
    if (environment === "development") {
      res.sendFile(path.replace(viteConfig.distPath, viteConfig.rootPath));
    } else {
      res.sendFile(path);
    }
  };
  next();
};

const listen = (app, port, callback) => {
  return app.listen(port, async () => {
    if (environment === "development") {
      await serveStaticFiles(app);
      await startDevServer();
    }
    callback === null || callback === void 0 ? void 0 : callback();
  });
};

export default { listen, handleRedirect };
