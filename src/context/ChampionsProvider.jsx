import { useState, useEffect, createContext } from "react";

const ChampionsContext = createContext()
const ChampionsProvider = ({ children }) => {

	const [championsArray, setChampionsArray] = useState([])
	const [search, setSearch] = useState('')
  const [searchArray, setSearchArray] = useState([])
	const [championData, setChampionData] = useState({})
	const [roles, setRoles] = useState('')

	// fetch champion.json that return all the champions
	useEffect(() => {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion.json`
    const getChampions = async () => {
      const request = await fetch(url)
      const response = await request.json()
      setChampionsArray(Object.values(response.data));
    }
    getChampions()
  }, [])

	// capitalize first search letter to always match champion id. aatrox => Aatrox
	const capitalizeFirstLetter = (search) => {
    const searchCleaned = search.replace(/\s/g, '')
    const firstLetter = searchCleaned.slice(0, 1).toUpperCase()
    const searchWord = searchCleaned.slice(1, searchCleaned.length)
    const concatSearch = `${firstLetter}${searchWord}`
    return concatSearch
  } 

	// store a new array of filtered champions by id
  const onSearch = (searchTerm) => {
    if (championsArray && search.trim() !== '') {
      const searchedChampions = championsArray.filter( champion => {
        if (champion.id.includes(capitalizeFirstLetter(searchTerm))|| champion.name.includes(capitalizeFirstLetter(searchTerm))) {
					// if (champion.name.includes("'")) {
					// 	const apostrophe = champion.name.indexOf("'")
					// 	const capitalizeAfterApostrophe = searchTerm.slice(apostrophe, apostrophe + 1).toUpperCase()
					// 	console.log(`${searchTerm.slice(0, apostrophe)}`)
					// 	console.log(searchTerm)
					// }
					// console.log(champion.tags[0])
          return champion
        }
      })
      setSearchArray(searchedChampions)
    }
  }

	const handleReoles = (e) => {
		setRoles(e.target.value)
		console.log(roles)
	}

	return (
		<ChampionsContext.Provider
			value={{
				championsArray,
				search,
				searchArray,
				championData,
				roles,
				setSearch,
				onSearch,
				setChampionData,
				setSearchArray,
				handleReoles,
				setRoles,
			}}
		>
			{ children }
		</ChampionsContext.Provider>
	)
}

export { ChampionsProvider }

export default ChampionsContext