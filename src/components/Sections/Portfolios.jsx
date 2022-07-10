import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Bootstrap",
  },
  {
    id: 3,
    name: "Javascript",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "PHP",
  },
];

const allData = [
  {
    id: 1,
    name: "",
    category: ["javascript"],
    image: "images/portfolio/dine.png",
    slug: "creative-art",
  },
  {
    id: 2,
    name: "",
    category: ["javascript"],
    image: "images/portfolio/creative.png",
    slug: "apple-usb",
  },
  {
    id: 3,
    name: "",
    category: ["bootstrap"],
    image: "images/portfolio/ate.png",
    slug: "work-space",
  },
  {
    id: 4,
    name: "",
    category: ["php,javascript"],
    image: "images/portfolio/pod.png",
    slug: "creative-bulb",
  },
  {
    id: 5,
    name: "",
    category: ["javascript"],
    image: "images/portfolio/photo.png",
    slug: "iphone-8",
  },
  {
    id: 6,
    name: "",
    category: ["php", "javascript"],
    image: "images/portfolio/master.png",
    slug: "minimal-art",
  },
  {
    id: 7,
    name: "",
    category: ["javascript", "react"],
    image: "images/portfolio/squid.png",
    slug: "creative-art",
  },
  {
    id: 8,
    name: "",
    category: ["bootstrap"],
    image: "images/portfolio/qhse.png",
    slug: "apple-usb",
  },
  {
    id: 9,
    name: "",
    category: ["react"],
    image: "images/portfolio/arch.png",
    slug: "work-space",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
