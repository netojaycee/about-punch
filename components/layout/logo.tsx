import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.webp"
        alt="PUNCH"
        width={100}
        height={30}
        className="h-auto w-auto"
      />
    </Link>
  );
};

export default Logo;
