import { FC, useCallback } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import { Tooltip } from "ui";
import useStore from "@store";

const CopyButton: FC<{ content: string }> = ({ content }) => {
	const { t } = useTranslation();
	const addToast = useStore(useCallback(state => state.addToast, []));
	const copyToClipBoard = useCallback(() => {
		window.navigator.clipboard
			.writeText(content)
			.then(() => {
				addToast({ content: t("copyCodeSuccess") });
			})
			.catch(() => {
				addToast({ content: t("copyCodeFail") });
			});
	}, [content, addToast, t]);
	return (
		<Tooltip
			type="button"
			className="absolute sm:right-4 sm:top-4"
			onClick={copyToClipBoard}
			trigger={
				<IoCopyOutline className="text-2xl text-gray-100 hover:text-gray-200" />
			}
		>
			{t("copyCode")}
		</Tooltip>
	);
};

export default CopyButton;
