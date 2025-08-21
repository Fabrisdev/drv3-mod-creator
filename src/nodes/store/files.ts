import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
	filenames: string[];
	edgeType: string;
	actions: Actions;
};

type Actions = {
	addFile: (filename: string) => void;
	removeFile: (filename: string) => void;
	setEdgeType: (type: string) => void;
};

export const useFilesStore = create<Store>()(
	persist(
		(set, get) => ({
			filenames: [],
			edgeType: "default",
			actions: {
				addFile: (filename) => {
					set({ filenames: [...get().filenames, filename] });
				},
				removeFile: (filename) => {
					set({ filenames: get().filenames.filter((f) => f !== filename) });
				},
				setEdgeType: (type) => {
					set({ edgeType: type });
				},
			},
		}),
		{
			name: "filenames-store",
			partialize: (state) => ({ filenames: state.filenames }),
		},
	),
);
