import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  console.log(people);
  const [index, setIndex] = useState(0);
  console.log(people[index]);
  const { name, job, image, text } = people[index];
  console.log(name);

  const nextPerson = (index) => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = (index) => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex
    });
  };

  const randomPerson = () => {
	let newIndex = Math.floor(Math.random() * people.length);
	
	// Ensure newIndex is different from the current index
	while (newIndex === index) {
	  newIndex = Math.floor(Math.random() * people.length);
	}
  
	setIndex(newIndex);
  };
  
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Random Person
        </button>
      </article>
    </main>
  );
};
export default App;
