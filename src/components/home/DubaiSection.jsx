const DubaiSection = ({title,children}) => {
  return (
      <div className="md:my-20 my-10">
          <section className="px-4 md:px-0 md:container md:mx-auto md:text-center md:max-w-[500px]">
              <h1 className="heading font-bold">{title}</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellat nostrum non asperiores velit unde eaque atque</p>
          </section>
          <div className="md:container md:mx-auto mt-4">
          {children}
          </div>
    </div>
  )
}
export default DubaiSection