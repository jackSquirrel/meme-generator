import React from 'react'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemesImgs: []
        }
        this.handlerChange = this.handlerChange.bind(this)
        this.randomPick = this.randomPick.bind(this)
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

    randomPick(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemesImgs.length);
        const randomObj = this.state.allMemesImgs[randomNum]
        this.setState({randomImg: randomObj.url})
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.randomPick}>
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
                <div className="meme">
                    <img align="center" src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator