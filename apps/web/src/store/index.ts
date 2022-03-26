import create from "zustand";
import createToastSlice, { type ToastSlice } from "./ToastSlice";

type Store = ToastSlice;

const useStore = create<Store>((set, get) => ({
	...createToastSlice(set, get),
}));

export default useStore;
