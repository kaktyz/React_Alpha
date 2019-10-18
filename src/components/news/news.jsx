import React from 'react';


class News extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            visible: false
        }

    }

    render(){
        const {items} = this.props;

        return items.length === 0 ? <div>Нету новостей((</div> : this.renderContent();
    }

    renderContent(){

       return( <div>
            {this.renderNews()}
        </div>)
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

                    <a href="#" onClick={ (e) => this.handleClick(e) }>
                        {this.state.visible ? 'Cкрыть' : 'Подробнее'}
                    </a>

                    {this.state.visible ? <div className={ 'news__full_descr'}>Полное описание.</div> : null}

                </div>
            );
        });
    }

    handleClick(e){
        e.preventDefault();

        this.setState({
            visible : !this.state.visible
        });

    };

}

export default News;