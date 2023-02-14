import React, { useEffect, useRef, useState } from "react";
import "../../css/Pages/searching/filters.css";
import { CAT_FILTERS, LOC_FILTERS } from "./database";

function ChoiceSelection({choices=[], alreadyAdded=[], addToList}) {
  const selectionBox = useRef(0)

  useEffect(() => {
    const results = selectionBox.current.querySelectorAll(".result");
    results.forEach((result) => {
      result.addEventListener("click", () => {
        if (result.classList.contains("disable")) return
        const name = result.innerHTML;
        const searchBox = selectionBox.current.parentElement.querySelector(".filters__choice__box--search");
        addToList(name);
        searchBox.placeholder = "";
        searchBox.classList.remove("initial")
        searchBox.value = ""
        selectionBox.current.classList.remove("visible");
        result.classList.add("disable");
      })
    })
  })

  return (
    <div ref={selectionBox} className="filters__choice__box__selection">
      {choices.map((choice, id) => <li key={id} className="result">{choice}</li>)}
    </div>
  )
}

function Filters() {
  const [experience, setExperience] = useState(0);
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState([]);

  const getBackgroundSize = (max) => {
    return { backgroundSize: `${(experience * 100) / max}% 100%` };
  };

  const addCat = (name) => {
    setCategories((prv) => [...prv, name])
  }

  const addLoc = (name) => {
    setLocation((prv) => [...prv, name])
  }

  const removeChoice = (e) => {
    const choiceFields = e.currentTarget.parentElement;
    const filtersChoiceBox = choiceFields.parentElement;

    const allFields = filtersChoiceBox.querySelectorAll(".filters__choice__box--field");
    const input = filtersChoiceBox.querySelector('.filters__choice__box--search');

    if (allFields.length <= 0) {
      input.placeholder = "eg: Marketing";
      input.classList.add('initial');
    }else {
      input.placeholder = "";
      input.classList.remove('initial');
    }

    // temporary hack
    const allResults = filtersChoiceBox.querySelectorAll(".result");
    for (let result of allResults) {
      if (result.innerText.toLowerCase() === choiceFields.innerText.toLowerCase()) {
        console.log(result);
        result.classList.remove('disable');
        break;
      }
    }

    if (allFields.length === 1) {
      input.classList.add('initial');

      if (input.classList.contains('category')) {
        input.placeholder = 'eg: Marketing'
      }else {
        input.placeholder = 'eg: Delhi'
      }
    }

    choiceFields.remove();
  }

  useEffect(() => {
    const choiceBoxes = document.querySelectorAll(".filters__choice__box");
    choiceBoxes.forEach((box) => {
      const searchInput = box.querySelector(".filters__choice__box--search");

      box.addEventListener("click", (e) => {
        const clickedTag = e.target.tagName.toLowerCase();
        if (clickedTag !== 'i') {
          searchInput.focus();
          box.classList.add('active');
        }
      })

      box.addEventListener("focusout", () => {
        box.classList.remove('active')
        searchInput.value = "";
      })
    })

    const body = document.querySelector('body');
    body.addEventListener("click", (e) => {
      const selectionBox = document.querySelectorAll('.filters__choice__box__selection.visible');
      if (!e.target.classList.contains("result")) {
        selectionBox.forEach((box) => box.classList.remove("visible"))
      }
    })

    const choiceSearchBoxes = document.querySelectorAll(".filters__choice__box--search");
    choiceSearchBoxes.forEach((searchBox) => {
      const selectionBox = searchBox.parentElement.querySelector('.filters__choice__box__selection');

      searchBox.addEventListener("input", () => {
        selectionBox.classList.add('visible');
      })
    })
  }, [])


  return (
    <div className="filters">
      <h4 className="filters__heading">
        <i className="uil uil-filter"></i> Filters
      </h4>
      <div className="filters__choice category">
        <p className="filters__choice--heading">Category</p>
        <ul className="filters__choice__box">

          {categories.map((cat, id)=> <li key={id} className="filters__choice__box--field">{cat} <i onClick={removeChoice} className="uil uil-multiply"></i></li>)}
          <input type="text" className="filters__choice__box--search category initial" placeholder="eg: Marketing" />
          <ChoiceSelection choices={CAT_FILTERS} addToList={addCat} />
        </ul>
      </div>

      <div className="filters__choice location">
        <p className="filters__choice--heading">Location</p>
        <ul className="filters__choice__box">
          {location.map((loc, id)=> <li key={id} className="filters__choice__box--field">{loc} <i onClick={removeChoice} className="uil uil-multiply"></i></li>)}
          <input type="text" className="filters__choice__box--search location initial" placeholder="eg: Delhi" />
          <ChoiceSelection choices={LOC_FILTERS} addToList={addLoc} />
        </ul>

        <div className="filters__choice__checkbox first">
          <input type="checkbox" id="work-home" />
          <label htmlFor="work-home">Work From Home</label>
        </div>

        <div className="filters__choice__checkbox">
          <input type="checkbox" id="part-time" />
          <label htmlFor="part-time">Part Time</label>
        </div>
      </div>

      <div className="filters__range">
        <input
          style={getBackgroundSize(5)}
          onChange={(e) => setExperience(e.target.value)}
          type="range"
          id="experience"
          min="0"
          max="5"
          step="1"
          defaultValue="0"
        />
        <p className="filters__range--text">
          Experience: <span>{experience} years</span>
        </p>
      </div>

      <div className="filters__choice filters__salary">
        <p className="filters__choice--heading">Minimum Salary (Month)</p>

        <div className="filters__choice__checkbox first">
          <input type="radio" name="salary" id="s1" />
          <label htmlFor="s1">₹ 0 - ₹ 5,000</label>
        </div>

        <div className="filters__choice__checkbox">
          <input type="radio" name="salary" id="s2" />
          <label htmlFor="s2">₹ 5,000 - ₹ 10,000</label>
        </div>

        <div className="filters__choice__checkbox">
          <input type="radio" name="salary" id="s3" />
          <label htmlFor="s3">₹ 10,000 - ₹ 20,000</label>
        </div>

        <div className="filters__choice__checkbox">
          <input type="radio" name="salary" id="s4" />
          <label htmlFor="s4">₹ 20,000 - ₹ 50,000</label>
        </div>

        <div className="filters__choice__checkbox">
          <input type="radio" name="salary" id="s5" />
          <label htmlFor="s5">₹ 50,000+</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
