export default async function getCategories(){
    let response = await fetch('https://opentdb.com/api_category.php')
    let result = await response.json()
    return result['trivia_categories'].map((entry) => entry.name);
};