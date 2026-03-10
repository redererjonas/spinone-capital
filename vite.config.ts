import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import AutoImport from "unplugin-auto-import/vite";

const base = process.env.BASE_PATH || "/";
const isPreview = process.env.IS_PREVIEW ? true : false;

// Static HTML folders in public directory that should serve index.html directly
const staticHtmlFolders = ['angebot', 'fetrag', 'fetrag0001', 'fetrag0002'];

// Custom plugin to serve static HTML files from public folder
function staticHtmlPlugin(): Plugin {
  return {
    name: 'static-html-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';

        // Check if URL matches any static HTML folder
        for (const folder of staticHtmlFolders) {
          // Match /folder/ or /folder (without trailing slash)
          if (url === `/${folder}` || url === `/${folder}/` || url.startsWith(`/${folder}?`)) {
            const filePath = resolve(__dirname, `public/${folder}/index.html`);
            if (existsSync(filePath)) {
              res.setHeader('Content-Type', 'text/html');
              res.end(readFileSync(filePath, 'utf-8'));
              return;
            }
          }
          // Also handle /angebot/festgeld.html etc.
          if (url.startsWith(`/${folder}/`) && url.endsWith('.html')) {
            const htmlFile = url.split('?')[0]; // Remove query params
            const filePath = resolve(__dirname, `public${htmlFile}`);
            if (existsSync(filePath)) {
              res.setHeader('Content-Type', 'text/html');
              res.end(readFileSync(filePath, 'utf-8'));
              return;
            }
          }
        }

        next();
      });
    },
  };
}

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
    __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || ""),
  },
  plugins: [
    staticHtmlPlugin(),
    react(),
    AutoImport({
      imports: [
        {
          react: [
            "React",
            "useState",
            "useEffect",
            "useContext",
            "useReducer",
            "useCallback",
            "useMemo",
            "useRef",
            "useImperativeHandle",
            "useLayoutEffect",
            "useDebugValue",
            "useDeferredValue",
            "useId",
            "useInsertionEffect",
            "useSyncExternalStore",
            "useTransition",
            "startTransition",
            "lazy",
            "memo",
            "forwardRef",
            "createContext",
            "createElement",
            "cloneElement",
            "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate",
            "useLocation",
            "useParams",
            "useSearchParams",
            "Link",
            "NavLink",
            "Navigate",
            "Outlet",
          ],
        },
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),
  ],
  base,
  build: {
    sourcemap: true,
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
