import SearchIcon from '@mui/icons-material/Search';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';
import useChampions from '../hooks/useChampions';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const SearchWrapper = styled.div`
	align-items: center;
	display: flex;
	font-family: 'Montserrat', sans-serif;
	justify-content: center;
	padding-bottom: ${ props => props.theme.size.xxsmall };
	padding-left: ${ props => props.theme.size.medium };
	padding-right: ${ props => props.theme.size.medium };
	padding-top: ${ props => props.theme.size.medium };
`

const SearchForm = styled.form`
	align-items: center;
	display: flex;
	justify-items: center;
	position: relative;
	width: 240px;
	transition: ease-in-out .5s all;
`

const SearchBar = styled.input`
	border-radius: ${ props => props.theme.size.xxsmall };
	border: none;
	color: ${ props => props.theme.colors.white };
	font-size: ${ props => props.theme.fontSize.small };
	outline: none;
	padding: ${ props => props.theme.size.xsmall };
	padding-left: ${ props => props.theme.size.large };
	width: 100%;
	background-color: #141414;
`

const SearchButton = styled.button`
	align-items: center;
	background: none;
	border: none;
	color: inherit;
	cursor: pointer;
	display: flex;
	gap: ${ props => props.theme.size.xxsmall };
	justify-content: center;
	margin: 0;
	padding-left: ${ props => props.theme.size.xxsmall };
	position: absolute;

	svg {
		width: ${ props => props.theme.size.medium};
		height: ${ props => props.theme.size.medium };
		fill: ${ props => props.theme.colors.secondary };
	}
	
	${SearchForm}:hover & {
		svg {
			fill: ${ props => props.theme.colors.primary };
		}
	}
`

const SearchFilters = styled.div`
	height: 30px;
	align-items: center;
	display: flex;
	font-family: 'Montserrat', sans-serif;
	justify-content: center;
	padding-top: ${ props => props.theme.size.xxsmall };
	padding-right: ${ props => props.theme.size.medium };
	padding-bottom: ${ props => props.theme.size.medium };
	padding-left: ${ props => props.theme.size.medium };
`

const ShowAllButton = styled.button`
	height: 100%;
	display: flex;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	font-weight: ${ props => props.theme.fontWeight.bold };
	font-size: ${ props => props.theme.fontSize.small };
	border: none;
	background: transparent;
	padding: ${ props => props.theme.size.xxsmall};
	color: ${ props => props.theme.colors.primary };
	cursor: pointer;
`

const RolesDropdown = styled.select`
	height: 100%;
	display: flex;
	align-items: center;
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	font-weight: ${ props => props.theme.fontWeight.bold };
	font-size: ${ props => props.theme.fontSize.small };
	border: none;
	background: transparent;
	padding: ${ props => props.theme.size.xxsmall};
	color: ${ props => props.theme.colors.primary };
	cursor: pointer;
`

const Searchbar = ({ }) => {

	const { 
		search,
		searchArray,
		roles,
		setSearch,
		onSearch,
		setSearchArray,
		handleReoles,
		setRoles,	
	} = useChampions()

	const handleSubmit = (e) => {
		e.preventDefault()
		onSearch(search)
	}

	const cleanSearchArray = () => {
		setSearchArray([])
		setSearch('')
	}

	return ( 
		<ThemeProvider theme={theme}>
			<SearchWrapper>
				<SearchForm onSubmit={handleSubmit}>
					<SearchButton type='submit' ><SearchIcon /></SearchButton>
					<SearchBar 
						type="text"
						placeholder='Search'
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</SearchForm>
			</SearchWrapper>
			<SearchFilters>
				{searchArray.length != 0 && (
					<ShowAllButton onClick={() => cleanSearchArray()}><ArrowRightIcon/> Show all</ShowAllButton>
				)}
				<RolesDropdown value={roles} name='Roles' id='roles' onChange={handleReoles}>
					<option value=''>All Roles</option>
					<option value='Fighter'>Fighter</option>
					<option value='Tank'>Tank</option>
					<option value='Mage'>Mage</option>
					<option value='Assassin'>Assassin</option>
					<option value='Marksman'>Marksman</option>
					<option value='Support'>Support</option>
				</RolesDropdown>
			</SearchFilters>
		</ThemeProvider>
	 );
}
 
export default Searchbar;