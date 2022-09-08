import CardList from '../components/CardList';

export async function getServerSideProps(context) {
	// Fetch data from external API
	// const res = await fetch(`https://otakudesu-api.herokuapp.com/api/home`);
	const resTopAiring = await fetch(`https://raznime.herokuapp.com/top-airing`);
	const resRecentRelease = await fetch(
		`https://raznime.herokuapp.com/recent-release`
	);
	const data = { topAiring: [], recentRelease: [] };
	data.topAiring = await resTopAiring.json();
	data.recentRelease = await resRecentRelease.json();
	// Pass data to the page via props
	return { props: { data } };
}

export default function Home({ data: { topAiring, recentRelease } }) {
	return (
		<>
			<div className="max-w-[1080px] m-auto py-20 px-10">
				<h1 className="text-2xl font-bold italic mb-7"># Airing / On going</h1>
				<div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-flow-col-1 justify-center gap-10 my-5">
					{topAiring.map(
						({ animeImg, animeTitle, latestEp, animeId }, index) => (
							<div key={index}>
								<CardList
									thumb={animeImg}
									title={animeTitle}
									animeId={animeId}
									episode={latestEp}
								/>
							</div>
						)
					)}
				</div>
				<br />
				<h1 className="text-2xl font-bold italic mb-7"># Recent Release</h1>
				<div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-flow-col-1 justify-center gap-10 my-5">
					{recentRelease.map(
						({ animeImg, animeTitle, episodeNum, episodeId }, index) => (
							<div key={index}>
								<CardList
									thumb={animeImg}
									title={animeTitle}
									animeId={episodeId.split('-episode-')[0]}
									episode={`Episode ${episodeNum}`}
								/>
							</div>
						)
					)}
				</div>
			</div>
		</>
	);
}
