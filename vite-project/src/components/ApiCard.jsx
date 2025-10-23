export default function APICard({quote}){

    return(
        <div>
            <h3 className="text-xl font-semibold mb-2">Quote</h3>
            {quote ? 
            <p className="text-gray-500 dark:text-gray-400">
                {quote}
            </p> : 
            <p>Loading quote...</p>}
        </div>
    );
}