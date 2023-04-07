const { fontStyle, getAllFonts } = require('./index') // Update the require path based on your file structure

// Test fontStyle function
console.log('Text transformed with default font (black-square):')
console.log(fontStyle('Hello World'))

console.log('Text transformed with small-caps font:')
console.log(fontStyle('Lorem Ipsum', 'small-caps'))

console.log('Text transformed with invalid font:')
try {
    console.log(fontStyle('Test Text', 'invalid-font'))
} catch (error) {
    console.error(error.message)
}

// Test getAllFonts function
console.log('Available fonts:')
console.log(getAllFonts)
