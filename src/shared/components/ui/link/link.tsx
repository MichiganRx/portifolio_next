import Link from 'next/link';
import Image from 'next/image';

import style from './style.module.scss';

interface LinkButtonProps {
  img: string;
  link: string;
  alt: string;
}

export default function LinkButton({ img, link, alt }: LinkButtonProps) {
  return (
    <Link href={link} className={style.container} target="_blank">
      <Image src={img} alt={alt} width={25} height={25} />
    </Link>
  );
}
