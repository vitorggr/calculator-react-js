import { Component } from "react";

export class Button extends Component{
    
    cssButtonClass = this.props.disabled ? "button disabled" : "button";

    handleClick(){
        const {disabled,onClick} = this.props;
        if((onClick)&&(!disabled))
        this.props.onClick();
    }

    render(){
        this.cssButtonClass = this.props.disabled ? "button disabled" : "button";
        return(
        <div className={this.cssButtonClass} onClick={this.handleClick.bind(this)}>
            {this.props.display}
        </div>
        )
    }

}

