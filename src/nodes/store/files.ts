import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createFileStore } from "./file";

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
					const filenames = get().filenames;
					if (filenames.includes(filename)) return;
					set({ filenames: [...filenames, filename] });
				},
				removeFile: (filename) => {
					const fileStore = createFileStore(filename);
					const { setNodes, setEdges } = fileStore.getState().actions;
					setNodes([]);
					setEdges([]);
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
