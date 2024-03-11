import AdminSideBar from "../admin/ADMINSIDE"

const UserAddEnq = () => {
  return (
    <div>
        <AdminSideBar/>
        <section className="bg-white ">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-70 bg-white">
      <h2 className="mb-4 text-xl font-bold text-gray-900">ADD NEW COURSE</h2>
      <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium  ">Course Name</label>
                  <input type="text" name="name" id="name" className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""></input>
              </div>
              <div className="w-full">
                  <label  className="block mb-2 text-sm font-medium text-gray-900">Brand</label>
                  <input type="text" name="brand" id="brand" className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-primary-500 dark:focus:border-primary-500"placeholder="Product brand" required=""></input>
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                  <input type="number" name="price" id="price" className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""></input>
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                  <select id="category" className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="TV">Engineering</option>
                      <option value="PC">Science</option>
                      <option value="GA">Music</option>
                      <option value="PH">Art</option>
                  </select>
              </div>
              <div>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 ">Item Weight (kg)</label>
                  <input type="number" name="item-weight" id="item-weight" className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""></input>
              </div> 
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                  <textarea id="description" rows="8" className=" text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" className="bg-yellow-400 rounded-lg mr-10 px-20 text-white font-bold text-lg hover:bg-gray-400 p-2 mt-8">
              Add 
          </button>
      </form>
  </div>
</section>
    </div>
  )
}

export default UserAddEnq
