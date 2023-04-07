const { readFileSync } = require('fs-extra')

const fontStyles = JSON.parse(readFileSync('./styles.json', 'utf8'))

const getAllFonts = Object.keys(fontStyles)

const fontStyle = (text, font = 'black-square') => {
    if (!fontStyles.hasOwnProperty(font)) {
        throw new Error(`Invalid font type: ${font}`)
    }
    const fontMapping = Object.fromEntries(
        [...fontStyles[font]].map((char, index) => [String.fromCharCode(65 + index), char])
    )
    return [
        ...text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase()
    ]
        .map((char) => fontMapping[char] || char)
        .join('')
}

module.exports = {
    fontStyle,
    getAllFonts
}
