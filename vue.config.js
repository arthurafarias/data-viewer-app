module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                npmRebuild: true,
                // nodeGypRebuild: true,
                linux: {
                    target: [ 'deb', 'tar.gz' ]
                },
                // linux: {
                //     target: [ 'deb', 'apk', 'rpm', 'snap', 'tar.gz', 'tar.xz', 'tar.bz2', 'pacman', 'zip' ]
                // },
                // win: {
                //     target: ['nsis', 'portable', 'appx', 'msi', 'squirell', 'zip']
                // },
                asar: false,
                afterPack: require("./.vue.hooks/after-pack.js")
            },
            // List native deps here if they don't work
            externals: ['mosca'],
            // If you are using Yarn Workspaces, you may have multiple node_modules folders
            // List them all here so that VCP Electron Builder can find them
            nodeModulesPath: ['../../node_modules', './node_modules']
        }
    }
}