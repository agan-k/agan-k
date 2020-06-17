import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio">
    <a href="http://aic-photography.surge.sh/" target="_blank"><img src="../assets/aic-photography.jpg"></img></a>
    <a href="https://vietnaam88.netlify.app/" target="_blank"><img src="../assets/vietnaam.jpg"></img></a>
    <a href="http://clothespicker.surge.sh/" target="_blank"><img src="../assets/clothes-picker.jpg"></img></a>
    <a href="http://dominiquecarre.fr/" target="_blank"><img src="../assets/carre.jpg"></img></a>
    <a href="http://my-recipebook.surge.sh/" target="_blank"><img src="../assets/recipe-book.jpg"></img></a>
    </div>
  );
}
