function SkillCategory({ category, end, children }) {
    return (
        <div className={`flex flex-col ${end ? 'items-end' : 'items-start'} w-full gap-5`}>
            <h2 className='text-3xl font-bold text-[#1E2A38]'>{category}</h2>
            <div className={`flex flex-row w-full ${end ? 'justify-start' : 'justify-end'} mb-8`}>
                <span className='absolute h-7 w-7 bg-[#1E2A38] rounded-full'></span>
                <span className=' h-2 w-full bg-[#1E2A38] rounded-full mt-2.5'></span>
            </div>
            {children}
        </div>
    )
}

export default SkillCategory