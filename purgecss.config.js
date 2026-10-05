module.exports = {

    content: [
        './_site/**/*.html',
        './_site/**/**/*html'
    ],

    css: [
        './_site/assets/css/*',
    ],

    variables: true,
    output: './_site/assets/css/purged'

}
