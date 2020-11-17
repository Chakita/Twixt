import React from "react";
import "./interest.css";
import music from "./images/music.png";
import dance from "./images/dance.png";
import sports from "./images/sports.png";
import hackathon from "./images/hackathon.png";
import ml from "./images/ml.png";
import webdev from "./images/webdev.png";



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
                    <tbody>
                        <tr>
                            <td><Card image={music} title={'Music'} text={'Produce the finest of symphonies'}/></td>
                            <td><Card image={dance} title={'Dance'} text={'Find the best squad and get boogeying'}/></td>
                            <td><Card image={sports} title={'Sports'} text={'Play against the best'}/></td>
                        </tr>
                        <tr>
                            <td><Card image={hackathon} title={'Hackathon'} text={'Start your StartUp journey'}/></td>
                            <td><Card image={ml} title={'AI & ML'} text={'Learn with the machines'}/></td>
                            <td><Card image={webdev} title={'Web Dev'} text={'Leave your mark on the internet'}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InterestPage;