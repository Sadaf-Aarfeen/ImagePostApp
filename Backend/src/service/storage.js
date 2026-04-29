const ImageKit = require('@imagekit/nodejs')


const imageKit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadPost = async(buffer) => {
    const result = await imageKit.files.upload({
        file : buffer.toString('base64'),
        fileName : 'picOfTheDay'
    })
    return result
}

module.exports = uploadPost