import React from "react"
import ReactDom from "react-dom"

import Header from "./component/Header"
import UndoList from "./component/UndoList"
import './index.css'

class Todolist extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {
                    id: "1",
                    content: "待办事项",
                    name: '敲代码React'
                },
                {
                    id: "2",
                    content: "待办事项",
                    name: '敲代码Vue'
                },
                {
                    id: "3",
                    content: "待办事项",
                    name: '敲代码JQuery'
                }
            ]
        }
        
    }
    update(data){
        this.state.list.push(data)
        this.setState({list:this.state.list})
    }
    render(){
        return (
            <div>
                <Header update={this.update.bind(this)} list={this.state.list}></Header> 
                <UndoList list={this.state.list}></UndoList> 
            </div>
        )
    }
}
ReactDom.render(
    <Todolist/>,
    document.querySelector("#app")
)