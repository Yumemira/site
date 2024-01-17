import React from "react";

class PageBlock extends React.Component{
        
        constructor(props){
                super(props);
                this.state = {
                        MyClass:props.MyClass
                }
        }
        render(){
                return <div className={this.state.MyClass}>{this.props.children}</div>
        }
}
export default PageBlock;