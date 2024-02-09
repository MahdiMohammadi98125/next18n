import Link from "next/link";
import { getDictionary } from "../../../lib/dictionary";
import LocaleSwitcher from "./local-switcher";

export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang);
  return (
    <header className="max-w-[85rem] p-4 mx-auto ">
      <nav className="flex items-center justify-between px-8 py-4 ">
        <h1 className="text-3xl font-bold">
          <Link href="/">next18n</Link>
        </h1>
        <ul className="flex items-center gap-6 text-lg">
          <li>
            <Link
              className="transition-colors hover:text-black/50"
              href={`/${lang}`}
            >
              {navigation.home}
            </Link>
          </li>
          <li>
            <Link
              className="transition-colors hover:text-black/50"
              href={`/${lang}/about`}
            >
              {navigation.about}
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
