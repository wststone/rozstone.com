import { FC } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

interface CodePlayGroundProps {
	code: string;
}

const CodePlayGround: FC<CodePlayGroundProps> = ({ code }) => {
	return (
		<LiveProvider code={code}>
			<div className="flex items-center justify-between">
				<LiveEditor className="border border-sky-200"/>
				<LiveError />
				<LivePreview />
			</div>
		</LiveProvider>
	);
};

export default CodePlayGround