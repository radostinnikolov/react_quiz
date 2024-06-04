import { useEffect, useState, useCallback } from "react";
// import getCategories from "../http/getCategories.js";

export default function ConfigScreen( { onConfig }) {
    let [categories, setCategories] = useState([]);

    const getAllCategories = useCallback(async function getAllCategories(){
        let response = await fetch('https://opentdb.com/api_category.php')
        response = await response.json()
        response['trivia_categories'].unshift({id: '', name: "Any Category"})
        let result = response['trivia_categories'];
        setCategories(result);
    }, [])
    useEffect(() => {
        getAllCategories()
    }, [getAllCategories]);

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);
        onConfig(Object.fromEntries(data.entries()));
        console.log(Object.fromEntries(data.entries()));
    }

    
    return (
        <>
        <h1>Configure your quiz</h1>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="number">Choose number of questions:</label>
            <input type="number" name="number" defaultValue={1} min={1} max={50}/>

            <label htmlFor="category">Select category:</label>
            <select name="category" id="category">
                {categories ? categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) : <option value='loading...'>loading...</option>}
            </select>

            <label htmlFor="difficulty">Select difficulty:</label>
            <select name="difficulty" id="difficulty">
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <label htmlFor="type">Select type:</label>
            <select name="type" id="type">
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
            </select>
            <button>send</button>
        </form>
        

        </>

    )
}