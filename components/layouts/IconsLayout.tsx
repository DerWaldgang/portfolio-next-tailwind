import React from 'react'

interface ILayoutProps {
  children: React.ReactNode;
  text: string;
}

const IconsLayout = React.memo(({children, text}:ILayoutProps) => {
  return (
    <div className="flex items-center space-x-2 justify-center">
    <div className='text-[#F7AB0A] h-7 w-7 animate-pulse'>{children}</div>
    <p className="tracking-[2px] font-thin">{text}</p>
</div>
  )
})

export default IconsLayout