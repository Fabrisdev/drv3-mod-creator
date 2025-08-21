"use client";

import { useFilename } from "@/file-manager/hooks/useFilename";
import { useNodes } from "../store/file";

export function useQueryNodes() {
	const { filename } = useFilename();
	return useNodes((state) => state.files[filename as string]?.nodes) ?? [];
}
