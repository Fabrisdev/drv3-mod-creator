"use client";

import { useParams } from "next/navigation";
import { useNodes } from "../store/store";

export function useQueryNodes() {
	const { filename } = useParams();
	return useNodes((state) => state.files[filename as string]?.nodes) ?? [];
}
