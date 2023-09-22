import React from "react";
import NavBar from "./NavBar";

const UploadDoc = () => {

  const validateFileType = () => {
    var selectedFile = document.getElementById('fileInput').files[0];
    var allowedTypes = ['image/jpeg', 'image/png'];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert('Invalid file type. Please upload a JPEG, PNG file.');
      document.getElementById('fileInput').value = '';
    }
  }

  return (
    <>
      <NavBar />
      <div className="bg-[#F4F5FB] h-fit py-3 flex gap-3 md:flex-none">
        <div className="bg-white shadow rounded-xl w-[95%] md:w-[75%] mx-auto py-2 pl-1">

          {/* First Block */}
          <div className="flex justify-between items-center">
            <h2 className="text-amber-500 text-[25px] font-normal leading-7 my-3 mx-2 md:ml-10">
              Upload Documents
            </h2>
            <button className="mx-5 py-2 px-8 text-white bg-green-600 h-fit rounded-lg ">
              Save
            </button>
          </div>
          <hr />

          <div className=" ">
            {/* Instructions block */}
            <h3 className=" text-red-600 text-xl font-normal leading-7 md:mt-8 md:ml-10">
              Instruction for Uploading Image and Documents –
            </h3>

            <h4 className=" text-red-600 text-[15px] font-normal leading-7 md:mt-3 md:ml-10">
              Photo and Documents are required in .jpg or .jpeg image format.
            </h4>

            {/* Select File button */}

            <h4 className=" text-red-600 text-[15px] font-normal leading-7 md:ml-10">
              File size of photo must be within 10kb to 200kb limit.
            </h4>

            {/* Select File button */}

            <h4 className="text-red-600 text-[15px] font-normal leading-7 md:ml-10">
              File size of Documents must be within 600Kb to 2Mb limit.
            </h4>

            {/* Select File button */}
          </div>

          {/* Candidate Photo Block  */}

          <div className="md:mt-16 md:ml-10 flex my-5 md:my-0 flex-col md:gap-5 gap-3">

            {/* file select one  */}
            <div className=" flex flex-wrap ">
              <div className="w-full md:w-[50%]">
                <h4 className=" text-neutral-800 text-xs font-normal leading-[21.12px] ">
                  Candidate's Government issued ID{" "}
                </h4>
                <h5 className="text-indigo-500 text-xs font-normal leading-[21.12px] ">
                  Accepted formats .jpeg, .jpg
                </h5>
              </div>
              <input type="file" name="" id="fileInput" onChange={validateFileType} />
            </div>


            {/* file select two  */}
            <div className=" flex flex-wrap ">
              <div className="w-full md:w-[50%]">
                <h4 className=" text-neutral-800 text-xs font-normal leading-[21.12px] ">
                  Candidate's Government issued ID{" "}
                </h4>
                <h5 className="text-indigo-500 text-xs font-normal leading-[21.12px] ">
                  Accepted formats .jpeg, .jpg
                </h5>
              </div>
              <input type="file" name="" id="fileInput" onChange={validateFileType} />
            </div>

            {/* file select three  */}
            <div className=" flex flex-wrap ">
              <div className=" w-full md:w-[50%]">
                <h4 className=" text-neutral-800 text-xs font-normal leading-[21.12px] ">
                  Candidate's Last year Marksheet
                </h4>
                <h5 className=" text-indigo-500 text-xs font-normal leading-[21.12px] ">
                  Accepted formats .jpeg, .jpg{" "}
                </h5>
              </div>
              <input type="file" name="" id="fileInput" onChange={validateFileType} />
            </div>
          </div>
          {/* ########################################################### */}

          {/* Button for Previous section */}
          <div className=" my-5 md:my-16 md:ml-10 md:flex md:justify-between">
            <button className="w-[164px] h-[47px] bg-gray-900 rounded-md border border-gray-300 text-white my-2 md:my-0">
              Previous Section
            </button>
            <button className="w-[242px] h-[47px] bg-emerald-500 rounded-md shadow border border-emerald-500 text-white mr-10">
              Proceed to Preview Section
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadDoc;
