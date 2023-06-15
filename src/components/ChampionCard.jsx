import styled from "styled-components";
import useChampions from "../hooks/useChampions";
import { useState } from "react";

const CardContainer = styled.div`
	background-position: center top;
	background-size: cover;
	border-radius: ${ props => props.theme.size.xxsmall };
	min-height: 200px;
	position: relative;
`

const Card = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	font-family: 'Montserrat', sans-serif;
	height: 100%;
	width: 100%;
`

const CardInfoWrapper = styled.div`
	align-items: flex-end;
	background-color: black;
	background: linear-gradient(0deg, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0) 100%);
	border-radius: 0 0 ${ props => props.theme.size.xxsmall } ${ props => props.theme.size.xxsmall } ;
	bottom: 0;
	display: flex;
	gap: 12px;
	justify-content: space-between;
	left: 0;
	padding-top: ${ props => props.theme.size.xlarge};
	padding: ${ props => props.theme.size.medium};
	position: absolute;
	width: calc(100% - (${props => props.theme.size.medium}*2));
`

const ChampionInfo = styled.div`
	display: flex;
	flex-direction: column;
`

const ChampionName = styled.h3`
	color: ${ props => props.theme.colors.white };
	font-size: ${ props => props.theme.fontSize.xlarge };
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-weight: ${ props => props.theme.fontWeight.bold};
	letter-spacing: ${ props => props.theme.size.xxsmall };
	text-align: start;
`

const ChampionTitle = styled.p`
	color: ${ props => props.theme.colors.white };
	font-size: ${ props => props.theme.fontSize.xsmall };
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-weight: ${ props => props.theme.fontWeight.medium};
	letter-spacing: ${ props => props.theme.size.xxsmall };
	text-align: start;
`

const ChampionTags = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

const Tag = styled.p`
	color: ${ props => props.theme.colors.white };
	font-size: ${ props => props.theme.fontSize.xsmall };
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-weight: ${ props => props.theme.fontWeight.medium};
	letter-spacing: ${ props => props.theme.size.xxsmall };
	text-align: start;
`

const ChampionCard = ({ champion }) => {

	const [onHover, setOnHover] = useState(false)

	const { championData, setChampionData } = useChampions()

	const { blurb, id, image:{ full, sprite}, key, name, tags, title } = champion

	const fetchChampionData = async (championId) => {
		const url = `http://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/${championId}.json`
		const request = await fetch(url)
		const response = await request.json()
		setChampionData(response.data[championId]);
		
	}

	return ( 
		<CardContainer
			style={{ backgroundImage:`url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)` }} 
			onMouseEnter={() => setOnHover(true)} 
			onMouseLeave={() => setOnHover(false)}>
			<Card onClick={() => fetchChampionData(id)}>
				<CardInfoWrapper style={ onHover ? {background: `linear-gradient(to top,  #A7935F 0%, rgba(167, 147, 95, 0) 100%)`} : {}}>
					<ChampionInfo>
						<ChampionName>{name}</ChampionName>
						<ChampionTitle>{title}</ChampionTitle>
					</ChampionInfo>
					<ChampionTags>
						{tags.map((tag, index) => {
							return (
								<Tag key={`${id}${index}`}>{tag}</Tag>
							)
						})}
					</ChampionTags>
				</CardInfoWrapper>
			</Card>
		</CardContainer>
	 );
}
 
export default ChampionCard;