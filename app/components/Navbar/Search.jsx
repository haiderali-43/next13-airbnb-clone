"use client";
import { BiSearch } from "react-icons/bi";
import useSearchModal from "../../hooks/useSearchModal";
const Search = () => {
  const searchModal = useSearchModal();
  return (
    <div
      className="border-[1px] w-full md:w-auto transition cursor-pointer py-2 rounded-full shadow-sm hover:shadow-md"
      onClick={searchModal.onOpen}
    >
      <div className="flex items-center justify-between flex-row">
        <div className="text-sm font-semibold px-6">anywhere</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Anyweek
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex items-center flex-grow gap-3">
          <div className="hidden sm:block">Add Guest</div>
          <div className="p-2 bg-rose-500 text-white rounded-full">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
