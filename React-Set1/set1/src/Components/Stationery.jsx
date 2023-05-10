/**
 * Build a React component to display a list of stationery items with a header. The items and header should be passed as props. Header should be “Stationery Items”.
 */



export const Stationery =(props) => {

    const { items, header } = props;
    return (
        <div>
            <h1>{header} </h1>
            {
                items.map((item) => 
                <li style={{listStyle:"none"}}> {item}</li>)
            }


        </div>
    )
}