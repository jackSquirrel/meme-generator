import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then((res)=>{
                const memes = res.data.memes
                console.log(memes[1])
                this.setState({allMemesImgs: memes})
            })
    }

    render() {
        return (
            <h1>Here will be Memes</h1>
        )
    }
}

export default MemeGenerator