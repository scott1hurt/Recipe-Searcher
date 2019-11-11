import React, { Component } from 'react';
import axios from 'axios';


class RecipeSearcher extends Component {

    getRandomRecipe = () => {
        axios({
            /* We can */

            method: 'GET', 
            url: "https://www.themealdb.com/json/v1/1/random.php"
        })
        .then(function(response){
            console.log(response);

        })
        .catch(function(error) {
            console.log(error);
        })

    }

    render() {
        this.getRandomRecipe();
        
        return (
            <div></div>
        );
    }
}
export default RecipeSearcher;