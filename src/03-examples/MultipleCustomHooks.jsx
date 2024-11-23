

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Phone } from './';


export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`hhttps://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    const { author, phone, quote } = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                 ? <LoadingQuote />
                 : <Phone author={ author } phone={ phone } quote={quote}/>
            }
                      
            <button 
                role="button"
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next quote
            </button>

        </>
    )
}
