import { useEffect, useState } from "react";
import getCategories from "../http/getCategories.js";

export default function ConfigScreen() {
    let [categories, setCategories] = useState([]);

    async function getAllCategories(){
        categories = await getCategories();
        setCategories(categories);
    }
    useEffect(() => {
        getAllCategories()
    }, []);

    
    return (
        <>
        <h1>Configure your quiz</h1>
        
        <label htmlFor="number">Choose number of questions:</label>
        <input type="number" name="number" />

        <label htmlFor="category">Select category:</label>
        <select name="category" id="category">
            {categories ? categories.map((item) => <option key={item} value={item}>{item}</option>) : <option value='loading...'>loading...</option>}
        </select>

        <label htmlFor="difficulty">Select difficulty:</label>
        <select name="difficulty" id="difficulty">
            <option value="anyDifficulty">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <label htmlFor="type">Select type:</label>
        <select name="type" id="type">
            <option value="anyType">Any Type</option>
            <option value="multipleChoice">Multiple Choice</option>
            <option value="trueFalse">True/False</option>
        </select>

        </>

    )
};