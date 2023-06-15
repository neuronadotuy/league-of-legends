import { useContext } from "react"
import ChampionsContext from "../context/ChampionsProvider"

const useChampions = () => {
	return useContext(ChampionsContext)
}

export default useChampions
