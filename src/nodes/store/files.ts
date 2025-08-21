import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
	filenames: string[];
	actions: Actions;
};

type Actions = {
	addFile: (filename: string) => void;
	removeFile: (filename: string) => void;
};

export const useFilesStore = create<Store>()(
	persist(
		(set, get) => ({
			filenames: [],
			actions: {
				addFile: (filename) => {
					set({ filenames: [...get().filenames, filename] });
				},
				removeFile: (filename) => {
					set({ filenames: get().filenames.filter((f) => f !== filename) });
				},
			},
		}),
		{
			name: "filenames-store",
			partialize: (state) => ({ filenames: state.filenames }),
		},
	),
);
