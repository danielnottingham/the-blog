module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  safelist: ['hidden'],
  plugins: [require('flowbite/plugin')],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif']
    }
  }
}
