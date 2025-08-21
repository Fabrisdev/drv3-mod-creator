"use client";

import { useFilename } from "@/file-manager/hooks/useFilename";
import { createFileStore } from "../store/file";

export function useQueryNodes() {
	const { filename } = useFilename();
	const useFileStore = createFileStore(filename);
	return useFileStore((state) => state.nodes);
}
