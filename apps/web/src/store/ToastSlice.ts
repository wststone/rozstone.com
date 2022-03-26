import { SetState, GetState } from "zustand";
import { generateId } from "../lib/utils";

export const TOAST_DURATION = 2500;

type ToastType = "success" | "error";

export type Toast = {
	id: string;
	content: string;
	duration: number;
	type?: ToastType;
};

export type NewToast = {
	content: string;
	duration?: number;
	type?: ToastType;
};

export type ToastSlice = {
	toasts: Toast[];
	addToast: (newToast: NewToast) => void;
	removeToast: (id: string) => void;
};

const createToastSlice = (
	set: SetState<ToastSlice>,
	get: GetState<ToastSlice>
) => ({
	toasts: [],
	addToast: (newToast: NewToast) =>
		set(({ toasts }) => {
			const id = generateId();
			const toast = {
				...newToast,
				id,
				duration: newToast.duration || TOAST_DURATION,
			};
			// 防止重复
			for (const oldToast of toasts) {
				if (oldToast.content === toast.content) {
					return { toasts };
				}
			}
			const removeToast = get().removeToast;
			window.setTimeout(() => {
				removeToast(id);
			}, toast.duration + 500);
			return { toasts: [...toasts, toast] };
		}),
	removeToast: (id: string) =>
		set(({ toasts }) => ({
			toasts: toasts.filter(toast => toast.id !== id),
		})),
});

export default createToastSlice;
