import React, { useState, useRef } from 'react'
import './App.css';

const App = () => {

  const urls = [
  ]

  const [url, setUrl] = useState("");
  const [tFont, setTFont] = useState(20);
  const [cFont, setCFont] = useState(11);
  const [color, setColor] = useState("black")
  const [cards, setCards] = useState(urls);

  const element = useRef();
  const image = useRef();

  const handleChange = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]));
    setCards([
      ...cards,
      {
        title: "card title",
        content: "HAVE A GOOD WEEKEND!",
        url: URL.createObjectURL(e.target.files[0])
      }
    ])
  }

  const handleTChange = (e) => {
    setTFont(e.target.value);
  }

  const handleCChange = (e) => {
    setCFont(e.target.value);
    console.log(cFont)
  }

  const handleColor = (e) => {
    element.current.click()
    console.log(element.current)
  }

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  const handleUpload = (e) => {
    console.log(image.current)
  }

  return (
    <div className="h-screen mx-48">
      <div className="flex justify-around py-10 mt-20 border-blue-200 rounded-t-lg " style={{ backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.jpg)" }}>
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <div className="p-6 border-blue-200 rounded-t-lg w-96 h-60">
            <label className="inline-block mb-2 text-gray-500">File Upload</label>
            <div className="flex items-center justify-center w-full ">
              <label className="flex flex-col border-4 border-blue-200 border-dashed w-96 h-60 hover:bg-gray-100 hover:border-gray-300">
                <div className="flex flex-col items-center justify-center ">
                  {url == "" ? (<><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinejoin='round' strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Attach a file</p></>) :
                    <img onClick={handleUpload} className={`border-blue-200 rounded-t-lg  w-96 h-60`} src={url} alt="input error!" />
                  }
                </div>
                <input type="file" onChange={handleChange} className="opacity-0" />
              </label>
            </div>
          </div>

          <div className="p-6">

            <h5 className="mt-20 mb-2 text-xl font-medium text-gray-900 font" style={{ fontSize: tFont.toString() + "px" }}>Card title</h5>
            <p className="mb-4 text-base text-gray-700" style={{ fontSize: cFont.toString() + "px", color: color.toString() }}>
              HAVE A GOOD WEEKEND!
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="relative pt-4">
              <label className="form-label">Change the title font</label>
              <input
                type="range"
                className="w-full h-2 p-0 bg-gray-100 appearance-none form-range focus:outline-none focus:ring-0 focus:shadow-none"
                onChange={handleTChange}
                min={20}
                max={40}
                value={tFont}
              />
            </div>
            <div
              class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p class="text-center font-semibold mx-4 mb-0">Or</p>
            </div>
            <div className="relative pt-1 mt-10">
              <label className="form-label">Change the content font</label>
              <input
                type="range"
                className="w-full h-2 p-0 bg-gray-100 appearance-none form-range focus:outline-none focus:ring-0 focus:shadow-none"
                onChange={handleCChange}
                min={11}
                max={21}
                value={cFont}
              />
            </div>
            <div
              class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p class="text-center font-semibold mx-4 mb-0">Or</p>
            </div>
            <label className="form-label">Change the content color</label>
            <input className='invisible py-20' onChange={handleColorChange} type={"color"} ref={element}></input>
            <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={handleColor} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Change</button>
          </div>
        </div>
      </div>
      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            {
              cards.map(card => {
                return (<div class="flex flex-wrap w-1/3 px-3 py-3">
                  <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                      <img class="rounded-t-lg" src={card.url} alt="" />
                    </a>
                    <div class="p-6">
                      <h5 class="text-gray-900 text-xl font-medium mb-2">{card.title}</h5>
                      <p class="text-gray-700 text-base mb-4">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>)
              })
            }

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
