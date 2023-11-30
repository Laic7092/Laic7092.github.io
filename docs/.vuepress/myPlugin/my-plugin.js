const data = new Map()

const barPlugin = (options) => {
    return (app) => {
        return {
            name: 'vuepress-plugin-bar',

            extendsMarkdownOptions(OPT, APP) {
                // console.log('malou',OPT,APP);
            },
            extendsPageOptions: (pageOptions, app) => {
                if (pageOptions.filePath?.startsWith(app.dir.source('test/'))) {
                    // pageOptions.frontmatter = pageOptions.frontmatter ?? {}
                    // pageOptions.frontmatter.permalinkPattern = '/:year/:month/:day/:slug.html'
                    // console.log(pageOptions);
                    // console.log('malouhhhhhhhhh');
                } else {
                    console.log(pageOptions.filePath);
                }
            },
            extendsPage: (page) => {
                // console.log('----------------------',page);
                const { frontmatter, path, contentRendered, title, key } = page
                if (frontmatter) {
                    console.log(title, frontmatter, path);
                }
                data.set(key, { frontmatter, path, contentRendered, title })
            },
            onInitialized(app) {
                // console.log(app.pages);
            },
            onPrepared: async (app) => {
                // console.log(data);
                // 写入临时文件
                await app.writeTemp('foo.ts', `export const foo = ${JSON.stringify({ hh: 'sa' })}`)
                await app.writeTemp('malou.ts', `export const malou = ${JSON.stringify(Array.from(data).map(item => item[1]))}`)

            },
        }
    }
}

export default barPlugin