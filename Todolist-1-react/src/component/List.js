import React from "react"

export default class List extends React.Component {
    render(){
        const {list}=this.props
        const newList=this.props.list.length>0
        ?
            list.map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.content}</span>--<span>{item.name}</span>
                    </li>
                )
            })
        :""
        return(
           <div>
               <ul>
                    {newList} 
               </ul>
             
            </div>  
        )
       
    }
}