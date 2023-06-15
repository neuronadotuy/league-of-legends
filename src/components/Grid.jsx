import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import useChampions from "../hooks/useChampions";
import ChampionCard from "./ChampionCard";

const GridLayout = styled.div`
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
	gap: ${ props => props.theme.size.medium};
	padding: ${ props => props.theme.size.medium};
`

const Grid = () => {

	const { championsArray, searchArray } = useChampions()

	if (searchArray.length != 0) {
		console.log('here')
	}

	return ( 
		<ThemeProvider theme={theme}>
			<GridLayout>
				{ searchArray.length == 0 ? (
					championsArray.map( champion => {
						return <ChampionCard champion={champion} key={champion.id}/>
					})
					) : (
						searchArray.map( champion => {
							return <ChampionCard champion={champion} key={champion.id}/>
						})
					)
				}
			</GridLayout>
		</ThemeProvider>
	 );
}
 
export default Grid;