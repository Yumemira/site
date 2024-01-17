import React from "react";

class ImageSwitcher extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            MyClass:props.MyClass+"-r",
            imges:props.imges,
            counter:0
        }
    }

    nextPage = () => {
        this.setState((prevstate) => ({
            counter:(prevstate.counter+1)%prevstate.imges.length
        }))
    }

    prevPage = () => {
        this.setState((prevstate) => ({
            counter:prevstate.counter===0?prevstate.imges.length-1:prevstate.counter-1
        }))
    }

    render(){
        console.log("loaded");
        console.log(this.state.counter);
        return(<div className={this.state.MyClass}>
            <div id={this.state.MyClass+"-l"}>{this.state.imges[(this.state.counter-1)<0?this.state.imges.length-1:this.state.counter-1]}<div className={this.state.MyClass+"-whited"} onClick={this.prevPage}></div></div>
            <div id={this.state.MyClass+"-c"}>{this.state.imges[this.state.counter]}</div>
            <div id={this.state.MyClass+"-r"}>{this.state.imges[(this.state.counter+1)%(this.state.imges.length)]}<div className={this.state.MyClass+"-whited"} onClick={this.nextPage}></div></div>
        </div>)
    }
}

export default ImageSwitcher;