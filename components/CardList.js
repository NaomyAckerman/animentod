import Link from 'next/link';

const CardList = ({ thumb, title, episode, animeId }) => {
	return (
		<div className="h-[20rem] rounded-xl bg-gradient-to-tl from-gray-900 to-gray-600 bg-gradient-to-r p-3">
			<div className="h-[85%] w-[100%] relative overflow-hidden rounded-xl bg-gray-500">
				<Link href={`/detail/${animeId}`}>
					<div
						className="h-full w-full bg-cover bg-top bg-no-repeat cursor-pointer hover:scale-110 hover:rotate-6 transition-all"
						style={{
							backgroundImage: `url('${thumb}')`,
						}}
					></div>
				</Link>
			</div>
			<p className="mt-1 text-md font-bold italic text-white subpixel-antialiased">
				{`${title.substring(0, 22)}${title.length > 22 ? '...' : ''}`}
			</p>
			<p className="text-xs text-white subpixel-antialiased">{episode}</p>
		</div>
	);
};

export default CardList;
