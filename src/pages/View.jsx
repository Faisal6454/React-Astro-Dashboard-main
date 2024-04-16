import React from "react";
import "./Common.css";
import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/Context';
import Pagination from "../components/pagination/Pagination";
import { IoEyeOffOutline } from "react-icons/io5";

// Icon
import { HiPlusSmall, HiOutlineTag, HiPhoto } from "react-icons/hi2";
import { BiCalendarStar } from "react-icons/bi";
import { TfiRulerAlt, TfiSettings } from "react-icons/tfi";
import { RiDeleteBin7Line } from "react-icons/ri";

export default function View() {
    const { index } = useParams();
    console.log("index",index)
    const { images } = useDataContext();
    console.log("images",images)
    const selectedImage = images[parseInt(index)];
console.log(selectedImage)

return (
  <>
    <section className="body-font View-Box">
      <div>
        <div className="View-Head">
          <h1 className="title-font">{selectedImage.file.name}</h1>

          {/* <p className="leading-relaxed">{}</p> */}
          <Pagination />
          <div className="View-Head-Inner">
            <IoEyeOffOutline size={20} color="black" />
            <button>Train</button>
          </div>
        </div>
      </div>
      <div className="View-Container">
        <div className="View-Icon tracking-widest">
          <button>
            <HiPlusSmall size={22} />
          </button>
          <button>
            <HiOutlineTag size={22} />
          </button>
          <button>
            <HiPhoto size={22} />
          </button>
          <button>
            <BiCalendarStar size={22} />
          </button>
          <button>
            <TfiRulerAlt size={22} />
          </button>
          <button>
            <TfiSettings size={22} />
          </button>
          <button>
            <RiDeleteBin7Line size={22} />
          </button>
        </div>
        <div className="Btn-Bottom"></div>

        <div className="View-Image">
          <img alt="" src={URL.createObjectURL(selectedImage.file)} />
        </div>
      </div>
    </section>
  </>
);
}