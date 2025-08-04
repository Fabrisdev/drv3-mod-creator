import type { JSX } from "react";
export type NodeNameTypes = "text" | "start" | "end";
export type NodeTypes = Record<NodeNameTypes, (unknown) => JSX.Element>;
