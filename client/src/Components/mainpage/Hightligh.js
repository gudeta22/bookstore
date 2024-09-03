import React from 'react'

function HIghtligh() {
  return (
    <div>
         <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white flex-none p-4">
          <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
        </aside>

        <div className="flex-1 p-6 bg-gray-100">
          <div className="fixed w-[18rem] top-0 left-0 right-0 -mx-5 p-5 z-10 shadow-md">
            <div className="relative">
            
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M16.65 10.65A6.5 6.5 0 1110.65 4.65 6.5 6.5 0 0116.65 10.65z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {filteredPosts.length === 0
              ? Array.from({ length: 6 }, (_, index) => (
                  <div
                    key={index}
                    className="w-full h-80 bg-gray-300 animate-pulse rounded-lg"
                  ></div>
                ))
              : filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white shadow-lg mx-14  rounded-lg overflow-hidden flex flex-col cursor-pointer"
                    style={{ height: '420px' , width:'320px' }}
                    onClick={() => openModal(post)}
                  >
                    <img
                      src={post.image}
                      alt="Post Thumbnail"
                      className="w-full h-72 object-fit"
                    />
                    <div className="p-5 px-10 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">{post.title}</h3>
                      <p className="text-sm text-gray-600 truncate">{post.author}</p>
                      <p className="text-xl font-bold text-gray-800 mt-2">${post.price}</p>
                    </div>
                  </div>
                ))}
          </section>

          {selectedPost && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div
                ref={modalRef}
                className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{selectedPost.title}</h2>
                  <button onClick={closeModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-4">
                  {editMode ? (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="author">
                          Author
                        </label>
                        <input
                          type="text"
                          name="author"
                          value={formData.author}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="content">
                          Content
                        </label>
                        <textarea
                          name="content"
                          value={formData.content}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
                          Image
                        </label>
                        <input
                          type="file"
                          name="image"
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="pdf">
                          PDF
                        </label>
                        <input
                          type="file"
                          name="pdf"
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={cancelEditMode}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div>
                      <img
                        src={selectedPost.image}
                        alt="Post Thumbnail"
                        className="w-full h-64 object-fit rounded-lg mb-4"
                        name="image"
                      />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {selectedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Author:</strong> {selectedPost.author}
                      </p>
                      <p className="text-xl font-bold text-gray-800 mb-4">
                        ${selectedPost.price}
                      </p>
                      <p className="text-gray-700 mb-4">
                        {showFullDescription
                          ? selectedPost.content
                          : selectedPost.content.slice(0, 100) + "..."}
                        {selectedPost.content.length > 100 && (
                          <button
                            className="text-blue-500 ml-2 focus:outline-none"
                            onClick={toggleDescription}
                          >
                            {showFullDescription ? "Show Less" : "Show More"}
                          </button>
                        )}
                      </p>

                      {/* PDF Download & View Button */}
                      {selectedPost.pdf && (
                        <div className="flex space-x-4">
                          <a
                            href={selectedPost.pdf}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500"
                          >
                            Download PDF
                          </a>
                          <button
                            onClick={openPdfModal}
                            className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500"
                          >
                            View PDF
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="bg-gray-100 p-4 flex justify-end">
                  {!editMode && (
                    <>
                      <button
                        onClick={toggleEditMode}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeletePost(selectedPost.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* PDF Viewer Modal */}
              {isPdfModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white w-full max-w-3xl mx-4 rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                      <h2 className="text-lg font-semibold">PDF Viewer</h2>
                      <button onClick={() => setIsPdfModalOpen(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                   
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HIghtligh