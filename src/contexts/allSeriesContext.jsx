import { createContext, useContext, useEffect, useState } from 'react'
const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;

const AllSeriesContext = createContext();

function AllSeriesProvider({ children }) {


    const [allSeries, setAllSeries] = useState({
        state: 'loading'
    })


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);

                if (data.results.length > 0) {
                    setAllSeries({
                        state: 'success',
                        seriesData: data.results
                    })
                }
            })
            .catch(err => {
                console.error(err)
                setAllSeries({
                    state: 'error',
                    message: err.message
                })
            })
    }, [])

    console.log("after fetch data:", allSeries);


    return (
        <AllSeriesContext.Provider value={{ allSeries }}>
            {children}
        </AllSeriesContext.Provider>
    )
}


function useAllSeriesContext() {
    const context = useContext(AllSeriesContext)
    return context
}

export { AllSeriesProvider, useAllSeriesContext }