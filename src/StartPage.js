import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { InView } from "react-intersection-observer";
import gitar from "./Assets/ScrollImg/gitar.webp";
import caset from "./Assets/ScrollImg/caset.jpg";
import earbuds from "./Assets/ScrollImg/earbuds.jpg";
import ancient from "./Assets/ScrollImg/ancient.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
export function StartPage() {
  const navigate = useNavigate();
  const [index, SetIndex] = useState("");
  const startContent = [
    {
      title: "Location ",
      description:
        "The location of the hall can make or break an event. It's important to choose a venue that is easily accessible for attendees, with good transport links and parking facilities. The surrounding area should also be considered, such as local amenities, accommodation options, and any potential noise restrictions. The location should be convenient and attractive for attendees, while also providing a suitable atmosphere for the event.",
      img: gitar,
    },
    {
      title: " Capacity ",
      description:
        " The size of the hall is an important factor to consider when booking a venue. The venue should be large enough to comfortably accommodate all attendees, while also leaving enough space for activities, presentations, and networking. It's important to get a clear understanding of the capacity of the hall before making a booking to ensure that it can accommodate your event. An overcrowded hall can be uncomfortable for attendees, while a hall that's too large can create an awkward atmosphere.",
      img: ancient,
    },
    {
      title: "Amenities",
      description:
        " Amenities can make or break an event. Depending on the type of event you're hosting, you may require certain amenities such as audio-visual equipment, catering facilities, and stage or lighting equipment. It's important to check what amenities the hall offers and if they're included in the booking fee or if they come at an extra cost. Additionally, it's important to ensure that the amenities meet your specific requirements. The right amenities can enhance the experience for attendees and create a successful event.",
      img: earbuds,
    },
    {
      title: " Cost ",
      description:
        "Cost is a crucial factor to consider when booking a hall for an event. It's important to have a clear understanding of the overall cost of the venue, including any additional fees, deposits, and taxes. You should also consider the payment terms and cancellation policy, as well as any potential discounts or packages that the venue may offer. Be sure to have a clear budget in mind before booking to ensure that the hall is affordable and fits within your financial constraints.",
      img: caset,
    },
  ];
  const handleClick = (val) => {
    const element = document.getElementById(`content${val}`);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="page">
      <div className="startpage">
        <div
          style={{ width: "5vw", height: "3vh" }}
          className="startpageContentButton"
        >
          {" "}
          <h1>Started</h1>
        </div>
        <div className="startpageContent">
          {startContent.map((a, i) => (
            <div
              id={i}
              onClick={(e) => {
                handleClick(e.target.id);
              }}
              className="startpageContentButton"
              style={{ overflow: "hidden", padding: "20px" }}
            >
              {
                <h4
                  id={i}
                  onClick={(e) => {
                    handleClick(e.target.id);
                  }}
                >
                  {a.title}
                </h4>
              }
              {a.description}
            </div>
          ))}
        </div>
      </div>

      <div className="startpageContent containers">
        <div className="desc">
          {startContent.map((a, i) => (
            <RollOn a={a} i={i} SetIndex={SetIndex} />
          ))}
        </div>

        {index !== "" && (
          <div>
            <img
              style={{ borderRadius: "20px" }}
              src={startContent[index].img}
            />
          </div>
        )}
      </div>
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowCircleLeftIcon />}
        role="button"
        class="button-back"
      >
        <span class="text">Back</span>
      </Button>
      <Button
        onClick={() => navigate("/welcome")}
        startIcon={<ArrowCircleRightIcon />}
        role="button"
        class="button-next"
      >
        <span class="text">Next</span>
      </Button>
    </div>
  );
}
function RollOn({ i, a, SetIndex }) {
  const [colors, setColors] = useState();
  const myRef = useRef();
  useEffect(() => {
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver((entries) => {
      console.log("entry", entries[0]);
      setColors(entries[0].isIntersecting);
      entries[0].isIntersecting && SetIndex(i);
    }, options);
    observer.observe(myRef.current);
  }, []);
  return (
    <div
      style={{
        width: "40vw",
        height: "74vh",
        color: colors ? "black" : "tomato",
        fontWeight: 700,
        letterSpacing: "5px",
        wordSpacing: "5px",
      }}
      className="startpageContentButton"
      id={`content${i}`}
      ref={myRef}
    >
      {<h1>{a.title}</h1>}
      {a.description}
    </div>
  );
}
