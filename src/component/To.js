import React from "react";

export default class To extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            content: "",
            activeIpt: this.refs.activeIpt,
        };
    }
    iptName(e) {
        this.setState({ name: e.target.value });
    }
    iptContent(e) {
        this.setState({ content: e.target.value });
    }
    add() {
        const { name, content } = this.state;
        if (name !== "" && content !== "") {
            this.props.update({
                id: this.props.list.length + 1,
                name: this.state.name,
                content: this.state.content,
            });
        }

        this.setState({
            name: "",
            content: "",
        });
    }
    render() {
        return (
            <div class="wiget-to-box">
                <div className="ipt-content">
                    TodoList：
                    
                    <input
                        className="iptContent"
                        type="text"
                        placeholder = "输入前面的内容"
                        value={this.state.content}
                        onChange={this.iptContent.bind(this)}
                    />
                    <input
                        className="iptName"
                        type="text"
                        ref="activeIpt"
                        placeholder="输入后面的内容"
                        value={this.state.name}
                        onChange={this.iptName.bind(this)}
                    />

                    <div className="submitBtn" onClick={this.add.bind(this)}>
                        提交
                    </div>
                </div>
            </div>
        );
    }
}
