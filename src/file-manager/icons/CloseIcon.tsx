import Image from "next/image";

type Props = {
	size: number;
	alt: string;
};

export function CloseIcon({ size, alt }: Props) {
	return <Image src={"/close.png"} alt={alt} width={size} height={size} />;
}
