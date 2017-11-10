import React from "react"

export default class To extends React.Component {
    constructor(){
        super();
        this.state={
            name:"",
            content:"",
            activeIpt:this.refs.activeIpt
        }
    }
    iptName(e){
        this.setState({ name:e.target.value})
    }
    iptContent(e){
        this.setState({ content: e.target.value })
    }
    add(){
        const {name,content} =this.state
        if(name!==""&&content!==""){
            this.props.update({
                    id:this.props.list.length+1,
                    name: this.state.name,
                    content: this.state.content
                })
        }
        
        this.setState({
            name:"",
            content:""

        })
    }
    render(){
        return(
           <div>
                <input type="text" ref="activeIpt" value={this.state.name} onChange={this.iptName.bind(this)}/><br/>
                <input type="text" value={this.state.content} onChange={this.iptContent.bind(this)}/>
                <input type="button" value="提交" onClick={this.add.bind(this)}/>
            </div>  
        )
       
    }
}