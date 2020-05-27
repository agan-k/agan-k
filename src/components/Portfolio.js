import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio">
    <a href="http://gary-winogrand.netlify.app"><img src="../assets/winogrand.jpg"></img></a>
    <a href="https://vietnaam88.netlify.app/"><img src="../assets/vietnaam.jpg"></img></a>
    <a href="http://clothespicker.surge.sh/"><img src="../assets/clothes-picker.jpg"></img></a>
    <a href="http://dominiquecarre.fr/"><img src="../assets/carre.jpg"></img></a>
    <a href="http://my-recipebook.surge.sh/"><img src="../assets/recipe-book.jpg"></img></a>
    </div>
  );
}
