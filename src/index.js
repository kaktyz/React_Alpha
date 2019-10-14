import React from 'react';
import ReactDOM from 'react-dom';

const items = [
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

class News extends React.Component{
    render(){
        const {items} = this.props;

        return items.length === 0 ? <div>Нету новостей((</div> : this.renderContent();
    }

    renderContent(){
        <div>
            {this.renderNews()}
        </div>
    }

    renderNews(){
        return this.props.items.map((item, index)=>{
            return(
                <div className={'news'} key={index}>
                    
                    <h2 className={'news__title'}>
                        {item.title}
                    </h2>
                    
                    <div className={'news__descr'}>
                        {item.descr}
                    </div>

                </div>
            );
        });
    }
}

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hi all, it`s news!</h1>
                <News items={ items }/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));