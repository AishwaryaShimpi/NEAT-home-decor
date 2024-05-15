import React from "react";

function Footer() {
  return (
    <div className="absolute min-h-[40vh] ml-[20vh] mr-[20vh] flex">
      <div className="mr-[80vh]">
        <h3 className="text-lg mt-[7vh] font-bold">About NEAT.</h3>
        <p className="text-sm mt-[1vh]">
          At NEAT, we're dedicated to transforming houses into homes by offering
          a curated selection of elegant decor pieces and furnishings. Our
          passion lies in blending functionality with style, curating
          collections that inspire and elevate any living space. From timeless
          classics to modern marvels, each item in our catalog is carefully
          selected to bring comfort, beauty, and harmony to your home. With
          NEAT, creating a space that reflects your personality and taste has
          never been easier.
        </p>
      </div>

      <div className="ml-auto flex flex-col mt-[7vh] mr-[10vh]">
        <h4 className="text-lg font-bold">Links</h4>
        <a href="#">Home</a>
        <a href="#">Work</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="flex flex-col mt-[7vh] ">
        <div className="flex flex-col">
          <h3 className="text-mg font-bold">CONTACT INFORMATION</h3>
          <p className="mt-2">
            198 West 21th Street, Suite 721 New York NY 10016
          </p>
          <p>+1235 2355 98</p>
          <p>info@neat.com</p>
        </div>
      </div>

      <div className="absolute mt-[55vh] ml-[75vh]">
        <p>© 2024 NEAT.co All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
