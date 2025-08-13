import Image from "next/image";

type Props = {
	src: string;
	alt: string;
};

export function Icon32x({ src, alt }: Props) {
	return <Image src={src} alt={alt} width={32} height={32} />;
}
