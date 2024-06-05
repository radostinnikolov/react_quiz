export default function SelectInput({children, id}){
    const labelClasses = "my-5 block mb-2 text-base font-medium text-gray-900 dark:text-white"
    const selectClasses = "block w-1/3 px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    return (
        <>
        <label htmlFor={id} className={labelClasses}>Select {id}:</label>
        <select name={id} id={id} className={selectClasses}>
            {children}
        </select>
        </>
        
    )
}