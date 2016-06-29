var React = require('react');
var ReactDOM = require('react-dom');
var Scene = React.createClass({
    getInitialState: function() {
        return {position: {x:0,y:0}};
    },
    bindMouseMove: function() {
        function mouseMove(ev)
        {
            var Ev = ev || window.event;
            var mousePos = mouseCoords(Ev);
            this.setState({position:mousePos});
        }
        function mouseCoords(ev)
        {
            if(ev.pageX || ev.pageY){
                return {x:ev.pageX, y:ev.pageY};
            }
            return{
                x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
                y:ev.clientY + document.body.scrollTop - document.body.clientTop
            };
        }
        document.onmousemove = mouseMove.bind(this);
    },
    componentDidMount: function() {
        this.bindMouseMove();
    },
    render : function render() {
        return (
            <div className="wrapper">
                <Sun position={this.state.position}/>
                <Back position={this.state.position}/>
                <Middle position={this.state.position}/>
                <Front position={this.state.position}/>
                <Street position={this.state.position}/>
            </div>
        )
    }
});
var Sun = React.createClass({
    render : function render() {
        var style = {
            transform: 'translateX('+-(this.props.position.x-document.body.clientWidth/2)/15+'px) translateY('+-(this.props.position.y-document.body.clientHeight/2)/10+'px)'
        };
        return <div className="sun" style={style}></div>;
    }
});
var Back = React.createClass({
    render : function render() {
        var style = {
            transform: 'translateX('+-(this.props.position.x-document.body.clientWidth/2)/10+'px) translateY('+-(this.props.position.y-document.body.clientHeight/2)/100+'px)'
        };
        return <div className="back" style={style}></div>;
    }
});
var Middle = React.createClass({
    render : function render() {
        var style = {
            transform: 'translateX(0px) translateY('+(this.props.position.y-document.body.clientHeight/2)/100+'px)'
        };
        return <div className="middle" style={style}></div>;
    }
});
var Front = React.createClass({
    render : function render() {
        var style = {
            transform: 'translateX('+(this.props.position.x-document.body.clientWidth/2)/15+'px) translateY('+(this.props.position.y-document.body.clientHeight/2)/100+'px)'
        };
        return <div className="front" style={style}></div>;
    }
});
var Street = React.createClass({
    render : function render() {
        var style = {
            transform: 'translateX('+(this.props.position.x-document.body.clientWidth/2)/10+'px) translateY('+(this.props.position.y-document.body.clientHeight/2)/100+'px)'
        };
        return <div className="street" style={style}></div>;
    }
});
ReactDOM.render(
    <Scene />,
    document.getElementById('content')
);