import Link from 'next/link';

const CardEpisode = ({ episodeNum, episode }) => {
	return (
		<div>
			<Link href={`/nonton/${episode}`}>
				<div className="cursor-pointer w-full h-14 rounded-xl bg-gradient-to-tl from-gray-900 to-gray-600 bg-gradient-to-r p-3">
					<p className="text-xl text-white font-bold">{episodeNum}</p>
				</div>
			</Link>
		</div>
	);
};

export default CardEpisode;
