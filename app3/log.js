//////// Note on CommonJS vs ECMAScript Module ///////
// Files with the .mjs extension are ECMAScript Modules.
// Unlike the CommonJS module, the ECMAScript Module is not wrapped in a function.
// If we console.log(arguments) in this file type, we will get an error.
// If we console.log(exports, module.exports, require, __filename, __dirname) in this file type, we will get an error.





// running log.js should return something like this: 

/*
////MODULE EXPORTS//// 
{} 

////EXPORTS//// 
 {} 

////REQUIRE//// 
 [Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/Users/christian/web-node-drills-1/app-3',
    exports: {},
    filename: '/Users/christian/web-node-drills-1/app-3/practice.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/christian/web-node-drills-1/app-3/node_modules',
      '/Users/christian/web-node-drills-1/node_modules',
      '/Users/christian/node_modules',
      '/Users/christian/node_modules',
      '/Users/christian/coding/work/curriculum/node_modules',
      '/Users/christian/coding/work/node_modules',
      '/Users/christian/coding/node_modules',
      '/Users/christian/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
  },
  cache: [Object: null prototype] {
    '/Users/christian/web-node-drills-1/app-3/practice.js': Module {
      id: '.',
      path: '/Users/christian/web-node-drills-1/app-3',
      exports: {},
      filename: '/Users/christian/web-node-drills-1/app-3/practice.js',
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
} 

////FILENAME//// 
 /Users/christian/web-node-drills-1/app-3/practice.js 

////DIRNAME//// 
 /Users/christian/web-node-drills-1/app-3 

////ARGUMENTS//// 
 [Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/Users/christian/web-node-drills-1/app-3',
      exports: {},
      filename: '/Users/christian/web-node-drills-1/app-3/practice.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/Users/christian/web-node-drills-1/app-3/practice.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/Users/christian/web-node-drills-1/app-3',
    exports: {},
    filename: '/Users/christian/web-node-drills-1/app-3/practice.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/christian/web-node-drills-1/app-3/node_modules',
      '/Users/christian/web-node-drills-1/node_modules',
      '/Users/christian/node_modules',
      '/Users/christian/node_modules',
      '/Users/christian/coding/work/curriculum/node_modules',
      '/Users/christian/coding/work/node_modules',
      '/Users/christian/coding/node_modules',
      '/Users/christian/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '3': '/Users/christian/web-node-drills-1/app-3/practice.js',
  '4': '/Users/christian/web-node-drills-1/app-3'
}

*/