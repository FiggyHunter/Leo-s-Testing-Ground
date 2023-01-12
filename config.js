import path, {join, resolve} from 'path';
import { VitePluginFonts } from 'vite-plugin-fonts'


let projectName = "Leo Testing Ground"

module.exports = {
    server: {
        port: 8080
    },
    publicDir: './public',
    base: './',
    root: '../dev',
    build: {
        outDir: '../production/' + projectName + '/',
        emptyOutDir: true,
        sourcemap: 'inline',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'dev/index.html'),
                projects: resolve(__dirname, 'dev/projects.html'),
                about: resolve (__dirname, 'dev/about.html'),
                newproject: resolve(__dirname, 'dev/new-project.html'),
                index_complex: resolve(__dirname, 'dev/index-complex.html')
            },

            output: {
                chunkFileNames: 'assets/scripts/[hash].js',
                entryFileNames: 'assets/scripts/[hash].js',
                assetFileNames: ({name}) => {
                  if (/\.(gif|jpeg|jpg|webp|png|svg)$/.test(name ?? '')){
                      return 'assets/images/[name][extname]';
                  }
                  
                  if (/\.ttf$/.test(name ?? '')) {
                    return 'assets/fonts/[name][extname]'
                    }

                  if (/\.css$/.test(name ?? '')) {
                      return 'assets/styles/[hash][extname]';   
                  }

               
         
                  // default value
                  // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                  return 'assets/[name][extname]';
                },
           
          }
        }
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
            }
          }
    },

    resolve: {
        alias: {
          '../..': path.resolve(__dirname, 'dev'),
        }
      }

}