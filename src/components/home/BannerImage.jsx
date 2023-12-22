const BannerImage = () => {
  return (
    <div className='banner-style h-full relative lex items-center justify-center '>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 '></div>
      <div className='z-10 text-white absolute bottom-4 left-4 md:static md:text-center md:flex md:mt-24'>
        <h1 className='font-merri text-3xl md:text-4xl font-bold tracking-wider space-y-1 flex flex-col '>
          <span> DUBAI</span>
          <span>OFF PLAN</span>
          <span>PROJECTS</span>
        </h1>
      </div>
    </div>
  )
}
export default BannerImage
