const QuickLinks = () => {
  return (
      <section className="md:container md:mx-auto border-b md:border-t mt-4 md:mt-8 py-4 border-b-white border-t-white">
          <div className="md:flex md:justify-between">
              <div>
                  <ul className="flex flex-wrap leading-10 w-5/6 md:w-full  md:px-0 px-4">
                      <li>About </li>
                      <div className="w-[1px] h-3 mt-[14px] bg-white mx-4"></div>
                      <li>Latest News </li>
                      <div className="w-[1px] h-3 mt-[14px] bg-white mx-4"></div>
                      
                      <li>Newsletter </li>
                      <div className="w-[1px] h-3 mt-[14px] bg-white mx-4"></div>
                      <li>Sitemap</li>
                      <div className="w-[1px] h-3 mt-[14px] bg-white mx-4"></div>
                      <li>Contact Us</li>
                  </ul>
              </div>
              <div className="space-x-4 text-center border-t pt-4 mt-4 md:pt-0 md:mt-0 md:border-t-0">
                  <span>Currency</span>
                  <span>
                      <select className="bg-black border  border-white px-2">
                          <option value="AED">AED</option>
                          <option value="USD">USD</option>
                      </select>
                  </span>
              </div>
          </div>
    </section>
  )
}
export default QuickLinks