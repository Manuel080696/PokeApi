import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useAllCards } from "../hooks/useAllCards";
import { GetAllCards } from "../services/services";
import { CardContext } from "../context/CardContext";
import { useContext } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Categories = () => {
  const { currentPage } = useAllCards();
  const { cards, setCards, categories, setCategories } =
    useContext(CardContext);

  const handleCategoryChange = async (category: string) => {
    switch (category) {
      case "All":
        setCategories("q=rarity:");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Common":
        setCategories("q=rarity:Common");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Amazing Rare":
        setCategories("q=rarity:Amazing*Rare");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "LEGEND":
        setCategories("q=rarity:LEGEND");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Promo":
        setCategories("q=rarity:Promo");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Rare":
        setCategories("q=rarity:Rare");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Rare ACE":
        setCategories("q=rarity:Rare*ACE");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Rare BREAK":
        setCategories("q=rarity:Rare*BREAK");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Rare Holo":
        setCategories("q=rarity:Rare*Holo");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Rare Holo EX":
        setCategories("q=rarity:Rare*EX");
        setCards(await GetAllCards(currentPage, categories));
        break;
      case "Rare Holo GX":
        setCategories("q=rarity:Rare*GX");
        setCards(await GetAllCards(currentPage, categories));
        break;
      default:
        setCards(cards);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("all")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  All
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Common")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Common
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Amazing Rare")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Amazing Rare
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("LEGEND")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  LEGEND
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Promo")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Promo
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Rare")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Rare
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Rare ACE")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Rare ACE
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Rare BREAK")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Rare BREAK
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Rare Holo")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Rare Holo
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Rare Holo EX")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Rare Holo EX
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleCategoryChange("Rare Holo GX")}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Rare Holo GX
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
