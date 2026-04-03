import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiViewColumns,
  HiShoppingBag,
  HiMegaphone,
  HiEnvelope,
  HiUserGroup,
} from "react-icons/hi2";

// novo menu
export const navData = [
  { name: "Início", path: "/", Icon: HiHome },
  { name: "Trabalhos", path: "/work", Icon: HiViewColumns },
  { name: "Loja", path: "/loja", Icon: HiShoppingBag },        // agora aponta pra página interna
  { name: "Atualizações", path: "/updates", Icon: HiMegaphone },
  { name: "Equipe", path: "/team", Icon: HiUserGroup },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => {
          const isExternal = link.external;

          return isExternal ? (
            <a
              key={i}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center group hover:text-accent transition-all duration-300"
            >
              <link.Icon aria-hidden />
            </a>
          ) : (
            <Link
              key={i}
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
            >
              <link.Icon aria-hidden />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;