import React from 'react';
import News from '../news/news.jsx';


let inputNewsTitle;
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
    }  

    render(){
        return(
            <div>
                
                <input type="text" ref={ (input) => {this.inputNewsTitle = input;} }/>
                <button onClick={ () => this.handleClick()}>
                    Добавить новость
                </button>
                <h1>Hi all, it`s news!</h1>
                <News items={ this.state.items }/>
            </div>
        );
    }
    handleClick(){
        console.log();

        let {items} = this.state;
        items.push({
            title: this.inputNewsTitle.value,
            descr: 'more derscr'
        });

        this.inputNewsTitle.value='';
        this.inputNewsTitle.focus();

        this.setState(items);

    }
}

export default App;