import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    }

    render() {
        return (
            <h1>Here will be Memes</h1>
        )
    }
}

export default MemeGenerator