import { useState } from "react";
import ladypic from "../src/assets/jeans lady.jpg";

function App() {
   const [color, setColor] = useState("aliceblue");
   const [secondaryColor, setSecColor] = useState("black")
   const [textColor, setTextColor] = useState("white")
   

   const isChangeColor = (color) => {
     setColor(color);
     
  };
   
   const isTextColor = (secondaryColor) =>{
     setSecColor(secondaryColor)
   }
  
  
  
  return (
    <div
      className="w-full h-screen duration-200 m-0 p-3 flex flex-col  box-border"
      
    >
      <div className="w-2/4 h-12  bg-white border border-solid /*border-gray-900*/ rounded-3xl shadow-md shadow-slate-500 flex gap-2 p-1">
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-red-500 text-lg text-stone-50 font-sans font-extralight"
          onClick={(isTextColor) => isChangeColor("red", 'white') }
        >
          red
        </button>
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-green-600 text-lg text-stone-50 font-sans font-extralight"
          onClick={() => isChangeColor("green")}
        >
          Green
        </button>
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-blue-600 text-lg text-stone-50 font-sans font-extralight"
          onClick={() => isChangeColor("blue")}
        >
          Blue
        </button>
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-gray-900 text-lg text-stone-50 font-sans font-extralight "
          onClick={() => isChangeColor(" black")}
        >
          Dark
        </button>
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-yellow-400 text-lg text-stone-50 font-sans font-extralight "
          onClick={() => isChangeColor(" gold")}
        >
          Gold
        </button>
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-blue-950 text-lg text-stone-50 font-sans font-extralight "
          onClick={() => isChangeColor(" darkblue")}
        >
          Darkblue
        </button>
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-gray-600 text-lg text-stone-50 font-sans font-extralight "
          onClick={() => isChangeColor(" grey")}
        >
          Grey
        </button>
        <button
          className="outline-none rounded-3xl w-20 h-9 shadow-md bg-pink-400 text-lg text-stone-50 font-sans font-extralight "
          onClick={() => isChangeColor(" hotpink")}
        >
          Pink
        </button>
      
      </div>

      <div className="w-full h-72 mt-3 flex gap-5">
           <div style={{ backgroundColor: color, height: '600px', borderRadius:'10px' }}>
            <img
                  className="w-24 h-16 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-3"
                  src={ladypic}
                  alt=""
                  width="384"
                  height="512"
                  />
                  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                     <p className="text-lg font-medium" style={{color: textColor}}>
                        “Tailwind CSS is the only framework that I've seen scale on
                        large teams. It’s easy to customize, adapts to any design, and
                        the build size is tiny.”
                     </p>
                  </blockquote>
                  <figcaption className="font-medium">
                     <button>Learn More</button>
                     <div className="text-sky-500 dark:text-sky-400">
                        <h1>Sarah</h1>
                     </div>
                     <div className="text-slate-700 dark:text-slate-500">
                        <h4>Software Engineer</h4>
                     </div>
                  </figcaption>
                  </div>
        </div>

        <div style={{ backgroundColor: color, height: '600px', borderRadius:'10px' }}>
        <img
              className="w-24 h-16 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-3"
              src={ladypic}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium" style={{color: textColor}} >
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium" >
                <button>Learn More</button>
                <div className="text-sky-500 dark:text-sky-400">
                  <h1>Sarah</h1>
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  <h4>Software Engineer</h4>
                </div>
              </figcaption>
            </div>
        </div>

        <div style={{ backgroundColor: color, height: '600px', borderRadius:'10px' }}>
        <img
              className="w-24 h-16 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-3"
              src={ladypic}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium" style={{color: textColor}}>
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <button>Learn More</button>
                <div className="text-sky-500 dark:text-sky-400">
                  <h1>Sarah</h1>
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  <h4>Software Engineer</h4>
                </div>
              </figcaption>
            </div>
        </div>

        <div style={{ backgroundColor: color, height: '600px', borderRadius:'10px' }}>
        <img
              className="w-24 h-16 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto mt-3"
              src={ladypic}
              alt=""
              width="384"
              height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p className="text-lg font-medium" style={{color: textColor}}>
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. It’s easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <button>Learn More</button>
                <div className="text-sky-500 dark:text-sky-400">
                  <h1>Sarah</h1>
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  <h4>Software Engineer</h4>
                </div>
              </figcaption>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
