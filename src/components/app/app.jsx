import React from 'react';
import News from '../news/news.jsx';
import '../styles/app_style.css';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return{
        user: state.user
    };
}


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    title: 'Нобелевка',
                    descr: 'Нобелевка по экономике премия присуждена за эксперименты по снижению уровня бедности'
                },
                {
                    title: 'В московском метро задымилась станция "Выставочная"',
                    descr: 'Днем 14 октября временно закрыта на вход для пассажиров станция московского метро "Выставочная" (Филевская линия), поезда проезжают ее без остановок. В "Твиттере" столичной подземки пассажирам рекомендуется пользоваться другими станциями метро, расположенными в этом районе: "Деловой центр" Большой кольцевой линии и "Международная" Филевской линии.'
                },
                {
                    title: 'Нобелевка',
                    descr: 'Нобелевка по экономике премия присуждена за эксперименты по снижению уровня бедности'
                }
            ]
        }

        this.inputNewsTitle = null;
        this.inputNewsDescr = null

    }  

    render(){
        return(
            <div className={'mainConteiner'}>
                
                <div className={'AddNews_inputButton'}>
                    
                    <input type="text" ref={ (input) => {this.inputNewsTitle = input;} }/>
                    <input type="text" ref={ (input) => {this.inputNewsDescr = input;} }/>
                    <button className={'inputButton'} onClick={ () => this.handleClick()}>
                        Добавить новость
                    </button>
                </div>
                <h1 className={'hiwords'}>Hi all, it`s news!</h1>
                <News items={ this.state.items }/>
            </div>
        );
    }
    
    handleClick(){
        console.log();

        let {items} = this.state;
        items.push({
            title: this.inputNewsTitle.value,
            descr: this.inputNewsDescr
        });

        this.inputNewsTitle.value='';
        this.inputNewsTitle.focus();

        this.setState(items);

    }
}

export default connect(mapStateToProps)(App);