
import useFetch from "../../hooks/useFetch";



const ApiSearch: React.FC = () => {
    const [data] = useFetch(`https://openlibrary.org/search.json?q=the+lord+of+the+rings`)
    console.log([data])
    return (
        
        <ul>
            {data?.map((data) => (
                <li key={data.id}>
                    title: {data.title},
                    <div>body: {data.author} </div>
                    <hr />
                    <br />
                </li>
            ))}
        </ul>
    );
};

export default ApiSearch;