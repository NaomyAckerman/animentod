export async function getServerSideProps(ctx) {
	const { params } = ctx;
	const { id } = params;
	const animeLinkVideo = await fetch(
		`https://raznime.herokuapp.com/stream/watch/${id}`
	);
	const data = await animeLinkVideo.json();

	return { props: { data } };
}

const NontonAnime = ({ data }) => {
	return (
		<div className="max-w-[1080px] h-screen mx-auto flex justify-center items-center">
			<iframe
				src={data.Referer}
				// className="h-[50rem]"
				width="100%"
				height="600"
				scrolling="no"
				allowFullScreen="true"
			></iframe>
		</div>
	);
};

export default NontonAnime;
