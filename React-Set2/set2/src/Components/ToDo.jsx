/**
 * Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.
 */

export const Todo = ({todoItems})=> {

    return(

        <div>
            <h1>To Do</h1>
            {
                todoItems.map((todoItem) =>{
                    return(
                        <div style={{color: todoItem.isCompleted === true ? "green" : "red" }}>
                            <h2>{todoItem.title}</h2>
                            <p>{todoItem.description}</p>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}