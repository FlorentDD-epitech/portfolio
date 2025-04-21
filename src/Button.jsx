import './Button.css'

function Button({children, func}) {
  
    return (
      <>
        <button id='button'
          onClick={func}
          className=' bg-cyan-500
            rounded-4xl 
            p-3 
            ml-8 
            mt-5 
            shadow-md 
            shadow-cyan-500/50 
            hover:bg-cyan-600
            text-white
            active:translate-y-1 
            active:shadow-none'
        > {children}
        </button>
      </>
    )
}

export default Button