import CardEpisode from '../../components/CardEpisode';

export async function getServerSideProps(ctx) {
	const { params } = ctx;
	const { id } = params;
	const animeDetail = await fetch(
		`https://raznime.herokuapp.com/anime-details/${id}`
	);
	const data = await animeDetail.json();

	return { props: { data } };
}

const DetailAnime = ({ data }) => {
	let episodesList = data.episodesList;
	// let genres = data.genres;
	return (
		<div className="max-w-[1080px] m-auto py-20 px-10">
			<div className="lg:flex gap-7">
				<img
					className="h-[30rem] w-[30rem] rounded-2xl"
					src={data.animeImg}
					alt={data.animeTitle}
					height="100"
					width="100"
				/>
				<div>
					<p className="text-2xl lg:mt-0 mt-7">{data.animeTitle}</p>
					<p className="text-lg indent-10 mt-7">{data.synopsis}</p>
					{/* {genres.map((genre, key) => (
						<>
							<div
								key={key}
								className="h-[2rem] rounded-full px-3 justify-center bg-gradient-to-r from-sky-500 to-indigo-500"
							>
								{genre}
							</div>
						</>
					))} */}
				</div>
			</div>
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-flow-col-1 justify-center gap-10 mb-5 mt-7">
				{episodesList.map(({ episodeId, episodeNum }, key) => (
					<div key={key}>
						<CardEpisode
							episode={episodeId}
							episodeNum={`Episode ${episodeNum}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default DetailAnime;
