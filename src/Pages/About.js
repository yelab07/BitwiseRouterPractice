import React,{useEffect} from "react";

const About = () => {
  useEffect(() => {
  fetch(` http://www.omdbapi.com/?t="the matrix"apikey=7527a9f7`);
  // console.log("hello about ");
  // return () => {fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=7527a9f7`); }
   }
   , []);
//  useEffect(() => {
//    return () => {
//      console.log("hello am i ");
//    };
//  }, []);
  return (
    <div>
      <h2>Hello this is the about page</h2>
    </div>
  );
};

export default About;
