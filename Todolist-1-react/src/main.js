import React from "react"
import ReactDom from "react-dom"

import To from "./component/To"
import List from "./component/List"
 class Todolist extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {id:"xxx",name:"ooo",content:"123"}
            ]
        }
        
    }
    update(data){
        console.log(data)
        this.state.list.push(data)
        this.setState({list:this.state.list})
    }
    render(){
        return (
            <div>
                <To update={this.update.bind(this)} list={this.state.list}></To> 
                <List list={this.state.list}></List> 
            </div>
        )
    }
}
ReactDom.render(
    <Todolist/>,
    document.querySelector("#app")
)