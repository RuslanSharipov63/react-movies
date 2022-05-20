import React from 'react';
import RadioButtons from '../components/RadionButtons';
import CardsMovies from './../components/CardsMovies';
import Preloader from './../components/Preloader';
import Search from './../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {
        movies: [],
        radioButton: {
            name: '',
            all: true,
            movie: false,
            series: false,
        },
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))

    }

    changeRadioButton = (item) => {

        const checkButton = item;
        switch (checkButton) {
            case 'all': {
                return this.setState({ radioButton: { name: checkButton, all: true, movie: false, series: false } })
                break;
            }
            case 'movie': {
                return this.setState({
                    radioButton:
                    {
                        name: checkButton,
                        all: false,
                        movie: true,
                        series: false
                    }
                })
                break;
            }
            case 'series': {
                return this.setState({ radioButton: { name: checkButton, all: false, movie: false, series: true } })
                break;
            }

            default:
                return this.state;
        }

    }

    updateSearch = (str) => {
        this.setState({ loading: true });
        if (this.state.radioButton.name === 'all') {
            this.state.radioButton.name = null
        }
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${this.state.radioButton.name}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))

    }



    render() {

        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search updateSearch={this.updateSearch} />
                <RadioButtons
                    changeRadioButton={this.changeRadioButton}
                    radioButton={this.state.radioButton}
                />
                {
                    loading ? <Preloader />
                        : (<CardsMovies movies={movies} />)
                }

            </main>
        );
    }

}


export default Main;