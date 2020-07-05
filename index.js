const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const staticPageRoutes = require('./routs/static_page')
const sharesRoutes = require('./routs/shares')
const staffRoutes = require('./routs/staff')
const newsRoutes = require('./routs/news')
const blogRoutes = require('./routs/blog')
const qaRoutes = require('./routs/qa')
const programsRoutes = require('./routs/programs')
const directionRoutes = require('./routs/direction')
const servicesRoutes = require('./routs/services')
const ajaxRoutes = require('./routs/ajax')

const app = express()

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs',
	helpers: require('./utils/hbs_helper')
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use('/img', express.static(path.join(__dirname, 'img')))

app.use('/', staticPageRoutes)
app.use('/about', staticPageRoutes)
app.use('/partners', staticPageRoutes)
app.use('/price-list', staticPageRoutes)
app.use('/job', staticPageRoutes)
app.use('/programs-adults', staticPageRoutes)
app.use('/programs-children', staticPageRoutes)
app.use('/programs', programsRoutes)
app.use('/shares', sharesRoutes)
app.use('/blog', blogRoutes)
app.use('/post_staff', staffRoutes)
app.use('/news', newsRoutes)
app.use('/qa', qaRoutes)
app.use('/direction', directionRoutes)
app.use('/services', servicesRoutes)
app.use('/ajax', ajaxRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is Run on port ${PORT}`)
})