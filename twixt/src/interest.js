import React from "react";
import Music from "./interest.css"

class CardHeader extends React.Component {
    render() {
        const { image } = this.props;
        var style = { 
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} id={image} className="card-header">
            </header>
        )
    }
}
  
class Button extends React.Component {
render() {
    var margin={
        marginLeft:"80px",
        width:"75px",
        textAlign:"center"
    }
    return (
        <button className="btn btn-outline-info" style={margin}>Add</button>
    )
}
}

class CardBody extends React.Component {
render() {
    return (
    <div className="card-body">
        <h2>{this.props.title}</h2>
        <p className="body-content">{this.props.text}</p>
        <Button />
    </div>
    )
}
}

class Card extends React.Component {
    render() {
        return (
        <article className="card">
            <CardHeader image={this.props.image}/>
            <CardBody title={this.props.title} text={this.props.text}/>
        </article>
        )
    }
}

class InterestPage extends React.Component{
    render(){
        return(
            <div>
                <h1 className="heading">Pick your interests</h1>
                <table>
                <tr>
                    <td><Card image={Music} title={'Music'} text={'Produce the finest of symphonies'}/></td>
                    <td><Card image={Music} title={'Dance'} text={'Find the best squad and get boogeying'}/></td>
                    <td><Card image={Music} title={'Sports'} text={'Play against the best'}/></td>
                </tr>
                </table>
            </div>
        )
    }
}

export default InterestPage;