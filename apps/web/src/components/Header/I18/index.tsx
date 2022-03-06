import { useReducer } from "react";
import Link from "next/link";
import { IoLanguage } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const I18 = () => {
	const [state, toggle] = useReducer(state => !state, false);
	return (
		<div className="relative" onMouseEnter={toggle}>
			<button type="button" className="rounded-full p-1">
				<IoLanguage className="text-neutral-600 dark:text-neutral-200 h-6 w-6" />
			</button>
			<AnimatePresence>
				{state && (
					<motion.div
						className="absolute top-8 left-1/2 -translate-x-1/2 shadow-lg flex flex-col flex-wrap w-max text-center bg-white rounded-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						onMouseLeave={toggle}
					>
						<Link href="/zh">
							<a className="py-2 px-6">简体中文</a>
						</Link>
						<Link href="/en">
							<a className="py-2 px-6">English</a>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default I18;
