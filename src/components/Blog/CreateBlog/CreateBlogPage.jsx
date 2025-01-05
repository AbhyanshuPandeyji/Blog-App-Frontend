import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import JoditEditor from 'jodit-react';
import CreateBox from "./CreateBox";
import { Select } from "antd";
import { CreateBlogContext } from "../../../context/CreateBlogContext";

const BulkEmail = () => {

  const textRef = useRef(null);
  // const params = useParams(); // is used just for the parameters the conditionals - :id for eg.
  // console.log(params)

  useEffect(()=>{
    const locationOfPage = window.location.href;
    console.log(locationOfPage)
  },[])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState(null);
  const [imgUrl, setImgUrl] = useState("")
  // const [text, setText] = useState("");
  const [html, setHtml] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  // const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(null);
  // const emailTextRef = useRef(null)
  
  const {text , setText}  = useContext(CreateBlogContext);

  // const selectedTemplate = useMemo(
  //   () => campaignEmailTemplates[selectedTemplateIndex],
  //   [selectedTemplateIndex]
  // );
  // console.log(selectedTemplate);

  const dispatch = useDispatch();

  // const sendEmailHandler = () => {

  const navigate = useNavigate();

  console.log(html)
  // console.log(text)

  // console.log(text)

  const handleSelectedTemplate = (value) => {
    if (value === "select") {
      setSelectedTemplate("")
    } else
      if (value !== "" || value !== "select") {
        setSelectedTemplate(value)
      }
  }

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    // setImages(e.target.files[0])
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  }
  console.log(imgUrl)

  // console.log("selected template", selectedTemplate)
  console.log(images)
  console.log(title)
  console.log(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("blog",
      // JSON.stringify("hello its me")
      JSON.stringify({
        img: images,
        title: title,
        description: description,
        html: html,
      })
    );
    setText(html);
  }



  useEffect(() => {
    console.log(images)
    console.log(title)
    console.log(description);

  }, [images, title, description])

  return (
    <>
      <div className="overflow-y-auto min-h-screen px-6 py-4 md:gap-4 space-y-3">
        {/* Topbar  */}
        <div className="h-fit px-4 py-2 flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 w-full justify-between bg-white rounded-md">
          {/* <div className=" flex items-center gap-4">
            <button
              className="w-fit flex items-center gap-1 buttonBackground px-2 py-1 rounded-md text-white font-semibold"
            >
              <IoMdArrowRoundBack size={26} />
            </button>
            <h1 className=" text-xl font-semibold">Bulk Email Campaign</h1>
          </div> */}
          {/* <div className="flex flex-wrap sm:items-center items-start gap-2">
            <button
              className=" flex items-center gap-1 bg-yellow-600 px-2 py-1 rounded-md text-white font-semibold"
            >
              Logs
            </button>
            <button
              onClick={() => navigate("uploadtemplate")}
              className=" flex items-center gap-1 bg-green-600 px-2 py-1 rounded-md text-white font-semibold"
            >
              Create Template
            </button>
            <button
              className=" flex items-center gap-1 bg-gray-600 px-2 py-1 rounded-md text-white font-semibold"
            >
              Save & Send
            </button>
          </div> */}
        </div>

        <div className=" bg-white rounded-md h-full p-3">
          <h1 className=" font-bold md:text-2xl py-2">Create Blog</h1>
          <form action="" className=" space-y-3">
            {/* <div className=" flex flex-col gap-2 rounded">
              <label htmlFor="" className="text-sm font-semibold">
                Select Template :
              </label>
              <select
                name=""
                id=""
                className=" border-2 rounded p-2 flex-1 focus:ring-2 focus:ring-purple-800 outline-none"
                onChange={(e) => setSelectedTemplateIndex(e.target.value)}
                value={selectedTemplateIndex}
              >
                <option value="">Select</option>
                {campaignEmailTemplates &&
                  campaignEmailTemplates.map((item, index) => (
                    <option value={index} key={index} className="">
                      {item.name}
                    </option>
                  ))}
              </select>
            </div> */}
            {/* <div className=" flex flex-col gap-2 rounded" >
              <label htmlFor="" className="text-sm font-semibold">
                Select Template :
              </label>
              <Select
                placeholder="Select an Option"
                // defaultValue={{ label: "Select an Option", value: "select" }}
                className="rounded flex-1 focus:ring-2 h-[44px] focus:ring-purple-800 outline-none w-full"
                // options={selectOptions}
                // options={[{ label: "Select A Template", value: "" }, ...(campaignWhatsappTemplates?.map((option, index) => ({ label: option?.templateName, value: index })) || [])]}
                options={[{ label: "Select an Template", value: "select" }, { label: "Template 2", value: "templet2" }]}
                onChange={(value) => handleSelectedTemplate(value)}
              />
            </div> */}

            <div className=" flex flex-col gap-1 rounded flex-1">
              <label htmlFor="" className="text-sm font-semibold">
                Image Upload
              </label>
              <input
                type="file"
                className="border-2 rounded p-1 flex-1 focus:ring-2 focus:ring-purple-800 outline-none"
                onChange={(e) => handleImageUpload(e)}
                value={images}
              />
            </div>

            <div className=" flex flex-col gap-1 rounded flex-1">
              <label htmlFor="" className="text-sm font-semibold">
                Title :
              </label>
              <input
                type="text"
                className="border-2 rounded p-1 flex-1 focus:ring-2 focus:ring-purple-800 outline-none"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className=" flex flex-col gap-1 rounded flex-1">
              <label htmlFor="" className="text-sm font-semibold">
                Description :
              </label>
              <input
                type="text"
                className="border-2 rounded p-1 flex-1 focus:ring-2 focus:ring-purple-800 outline-none"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className=" flex flex-col gap-1 rounded flex-1">
              {/* <input value={text} onChange={(e) => setText(e.target.value)} className="bg-gray-300 border border-black" /> */}
              {/* <JoditEditor
                rows={6}
                ref={emailTextRef}
                config={config}
                // className="border-2 rounded p-1 flex-1 focus:ring-2 focus:ring-purple-800 outline-none"
                onBlur={newContent => setText(newContent)}
                onChange={newcontent => { }}
                value={text}
              /> */}
              <CreateBox html={html} setHtml={setHtml} />
              {/* <JoditEditor
                rows={6}
                ref={emailTextRef}
                config={config}
                // className="border-2 rounded p-1 flex-1 focus:ring-2 focus:ring-purple-800 outline-none"
                onBlur={newContent => setHtml(newContent)}
                onChange={newcontent => { }}
                value={html}
              /> */}
            </div>
            <button onClick={handleSubmit} >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BulkEmail;
