import { useEffect, useState, useCallback } from "react";
import SelectInput from "./SelectInput";
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
        
        <form onSubmit={handleSubmit} className="mt-20 flex flex-col justify-center items-center">
            <h1 className="mb-14 text-4xl font-extrabold leading-none tracking-tight text-teal-900 md:text-5xl lg:text-6xl dark:text-white">Configure your quiz</h1>

            <label htmlFor="number" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Choose number of questions:</label>
            <input type="number" name="number" defaultValue={1} min={1} max={50} className="block w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>

            <SelectInput id='category'>
            {categories ? categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>) : <option value='loading...'>loading...</option>}
            </SelectInput>

            <SelectInput id='difficulty'>
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </SelectInput>

            <SelectInput id='type'>
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
            </SelectInput>

            <button className="my-5 text-black bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Generate quiz</button>
        </form>
        

        </>

    )
}