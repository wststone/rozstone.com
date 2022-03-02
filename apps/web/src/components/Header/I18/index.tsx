import { useReducer } from "react";
import Link from "next/link";
import { IoLanguage } from "react-icons/io5";

const I18 = () => {
	const [state, toggle] = useReducer(state => !state, false);
	return (
		<div className="relative">
			<IoLanguage
				className="rounded-full p-1 h-8 w-8"
				onMouseEnter={toggle}
			/>
			{state && (
				<div
					className="absolute top-8 left-1/2 -translate-x-1/2 shadow-lg flex flex-col flex-wrap w-max text-center"
					onMouseLeave={toggle}
				>
					<Link href="/zh">
						<a className="py-2 px-6">简体中文</a>
					</Link>
					<Link href="/en">
						<a className="py-2 px-6">English</a>
					</Link>
				</div>
			)}
		</div>
	);
};

export default I18;
