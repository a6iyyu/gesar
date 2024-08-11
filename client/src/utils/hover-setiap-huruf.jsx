const HandleMouseEnter = e => e.style.transform = "scale(1.25)";

const HandleMouseLeave = e => e.style.transform = "scale(1)";

const HoverSetiapHuruf = (Text, HandleMouseEnter, HandleMouseLeave) => {
  return Text?.split("").map((char, i) =>
    <span className="inline-block transform tracking-wide duration-200 ease-in-out" key={i} onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}>
      {char === " " ? "\u00A0" : char}
    </span>
  );
};

export { HoverSetiapHuruf, HandleMouseEnter, HandleMouseLeave };