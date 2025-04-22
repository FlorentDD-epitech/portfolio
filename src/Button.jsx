import './Button.css'

function Button({children, func}) {
  
    return (
      <>
        <button id='button'
          style={{
            transform: "translateZ(75px)",
          }}
          onClick={func}
          className='
          bg-gradient-to-tl from-indigo-700 to-blue-400
          shadow-[0px_0px_49px_-10px_rgba(59,_130,_246,_0.5)]
          rounded-4xl 
          p-5
          text-2xl 
          ml-8 
          mt-5 
          hover:bg-gradient-to-br
          text-white
          active:translate-y-1 
          active:shadow-none'
        > {children}
        </button>
      </>
    )
}

export default Button