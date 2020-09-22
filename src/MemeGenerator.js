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
        this.handlerChange = this.handlerChange.bind(this)
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

    handlerChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <form class-name="meme-form">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top text"
                        value={this.state.topText}
                        onChange={this.handlerChange}
                    />

                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom text"
                        value={this.state.bottomText}
                        onChange={this.handlerChange}
                    />

                    <button>Gen</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator