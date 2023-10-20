import React, { useState } from "react";
import "../styles/modal.css";
import { Link } from "react-router-dom";
import page from "../assets/page (1).png";
import pdf from "../assets/page (2).png";

const Search = ({ closeModal }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // To control suggestion visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const countries = [
    // @-Downlaods
    { name: "Downloads", link: "/downloads", file: "Page" },
    {
      name: "Alucan Development",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Alupak_Development.pdf?v=1691043956",
      file: "Pdf",
    },
    {
      name: "Alucan ISO Certificate",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Alupak_ISO_Certificate.pdf?v=1691044074",
      file: "Pdf",
    },
    {
      name: "Aluminium Cartridge",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Aluminium_Can_apk.pdf?v=1691044529",
      file: "Pdf",
    },
    {
      name: "Aluminium Information",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Aluminium_Information_apk.pdf?v=1691044474",
      file: "Pdf",
    },
    {
      name: "Certificate of Compliance",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Certificate_of_Compliance_apk.pdf?v=1691044426",
      file: "Pdf",
    },

    {
      name: "Internal Lacquer Ammonia",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Internal_Lacquer_apk.pdf?v=1691044383",
      file: "Pdf",
    },
    {
      name: "Basecoat",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Basecoat_apk.pdf?v=1691044347",
      file: "Pdf",
    },
    {
      name: "Latex sealing compound",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Latex_Sealing_Compound_apk.pdf?v=1691044314",
      file: "Pdf",
    },
    {
      name: "Collapsible Aluminium Tube",
      link: "https://cdn.shopify.com/s/files/1/0689/7349/4550/files/Collapsibles_Aluminium_Tubes_apk.pdf?v=1691044222",
      file: "Pdf",
    },
    // @-About
    {
      name: "About Us",
      link: "/about-us",
      file: "Page",
    },
    // @-Product
    {
      name: "Products",
      link: "/products",
      file: "Page",
    },
    // @-Careers
    {
      name: "Careers",
      link: "/careers",
      file: "Page",
    },
  ];

  // search function
  const handleChangeSearch = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter countries for suggestions
    const filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredCountries(filtered);
    setShowSuggestions(inputValue.length > 0); // Show suggestions when input has text
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchInput(suggestion);
    setFilteredCountries([]);
    setShowSuggestions(false);
  };

  const handleClickCloseSearch = () => {
    setIsSearchOpen(false);
  };
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full modal-container">
      <div className="bg-white p-5 rounded-lg xs:w-[80%] md:max-w-md md:min-w-[70vw] lg:max-w-md lg:min-w-[50vw] min-h-[50vh] pt-0">
        {/* @-close button */}
        <div
          className="block text-right cursor-pointer text-xl relative top-[-17px] right-[-38px]"
          onClick={closeModal}
        >
          <span className="text-white bg-[#3f3f46] rounded-full px-3 py-2">
            {" "}
            &times;
          </span>
        </div>
        {/* content */}

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={handleChangeSearch}
            value={searchInput}
            className="block w-full xs:p-2 xs:pl-10 md:p-4 md:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
            placeholder="Search documentation"
          />
        </div>

        {showSuggestions && (
          <div className="suggestions-container overflow-auto h-[32vh] my-4">
            {filteredCountries.map((country, index) => (
              <div onClick={closeModal}>
                <div
                  key={index}
                  className="suggestion"
                  onClick={() => handleSelectSuggestion(country.name)}
                >
                  <Link
                    target="_blank"
                    to={country.link}
                    className="flex py-3 items-center hover:bg-gray-50 justify-between lg:px-8 xs:px-2"
                  >
                    <div className="flex">
                      <td className="xs:text-[13px] md:text-sm text-[#4b5563]">
                        {country.name}
                      </td>
                    </div>

                    {/* icon */}
                    <div className="flex flex-col items-center text-xs text-[#4b5563]">
                      {country.file === "Pdf" ? (
                        <div>
                          <img className="xs:w-5 md:w-8" src={pdf} />
                        </div>
                      ) : (
                        <div>
                          <img className="xs:w-5 md:w-8" src={page} />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
