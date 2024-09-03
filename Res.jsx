import React from 'react';

function PostProjectForm() {
  return (
    <div className="min-h-screen bg-beige-50 flex flex-col">
      <header className="p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-times text-[#000]">Alumni Research Collaboration</h1>
          <div className="flex items-center ml-auto space-x-4 text-[#000]">
            <a href="#" className="hover:underline">Post Project</a>
            <a href="#" className="hover:underline">Browse Projects</a>
          </div>
          <div className="text-[#000]">
            <button className="focus:outline-none">
              <span className="sr-only">User Menu</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-6 8a6 6 0 0112 0H4z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl w-full bg-beige-200 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-roboto mb-8 text-[#000]">Post Your Research Project</h1>
          <form>
            <div className="mb-6">
              <label htmlFor="projectTitle" className="block text-lg font-mono mb-2 text-[#000]">
                Project Title
              </label>
              <input
                type="text"
                id="projectTitle"
                className="w-full p-3 font-mono border border-[#edd9a3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#edd9a3]"
                placeholder="Enter project title"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="projectDescription" className="block text-lg font-mono mb-2 text-[#000]">
                Project Description
              </label>
              <textarea
                id="projectDescription"
                className="w-full p-3 h-32 border font-mono border-[#edd9a3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#edd9a3]"
                placeholder="Provide a detailed description of your research project"
              ></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="requirements" className="block text-lg font-mono mb-2 text-[#000]">
                Requirements
              </label>
              <textarea
                id="requirements"
                className="w-full p-3 h-32 font-mono border border-[#edd9a3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#edd9a3]"
                placeholder="List the skills and expertise you're looking for in collaborators"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-beige-50 text-[#000] rounded-md hover:bg-[#f4d9a9] font-medium"
            >
              Post Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostProjectForm;
