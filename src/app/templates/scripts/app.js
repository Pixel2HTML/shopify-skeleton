// Module Life
import './general'

const colors = [ 'pink', 'red', 'blue' ]
const moColors = ['blue', 'orange']

// We have Es6 Goodies thanks to Babel
const allTheColors = [ ...colors, moColors ]
allTheColors.map(c => console.log(c))
