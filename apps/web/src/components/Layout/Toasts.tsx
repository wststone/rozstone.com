import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { SimpleToast, ToastViewport } from "ui";
import useStore from "@store";

const Toasts: FC = ({}) => {
	const toasts = useStore(s => s.toasts);
	const removeToast = useStore(s => s.removeToast);
	return (
		<ToastViewport>
			<AnimatePresence>
				{toasts.map(toast => (
					<SimpleToast
						content={toast.content}
						duration={toast.duration}
						key={toast.id}
						onOpenChange={() => removeToast(toast.id)}
					/>
				))}
			</AnimatePresence>
		</ToastViewport>
	);
};

export default Toasts;
