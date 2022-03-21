import { useReducer } from "react";
import Link from "next/link";
import LanguageButton from "./LanguageButton";
import { motion, AnimatePresence } from "framer-motion";
import { Dropdown, HoverCard } from "ui";

const I18 = () => {
	// const [state, toggle] = useReducer(state => !state, false);
	return (
		<div className="relative">
			{/* <Dropdown /> */}
			<LanguageButton />
			<motion.div
				className="absolute top-8 left-1/2 -translate-x-1/2 shadow-lg flex flex-col flex-wrap w-max text-center bg-white rounded-sm"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				// onMouseLeave={toggle}
			>
				<Link href="/zh">
					<a className="py-2 px-4">简体中文</a>
				</Link>
				<Link href="/en">
					<a className="py-2 px-4">English</a>
				</Link>
			</motion.div>
		</div>
	);
};

export default I18;
