import React from "react";

export default class List extends React.Component {
    render() {
        const { list } = this.props;

        return (
            <div className="undolist-box">
                <div className="undolist-title">
			        正在进行:
                    <span data-test="count" className="count">{ list && list.length }</span>
                </div>
                <ul className="list">
                    {
                        list && list.map((item, index) => {
                            return (
                                <li key={index} className="item">
                                    <span>{index+1}. {item.content}</span> -- <span>{item.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
