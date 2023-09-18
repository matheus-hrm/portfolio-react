import { MouseEvent, ReactNode } from 'react';
import { Button } from '@radix-ui/themes'

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  children: ReactNode
}

function DarkButton({ onClick, children} : ButtonProps) {
  return (
    <Button 
    variant='outline' 
    radius='full' 
    className='custom-button relative flex justify-center w-10  h-0' 
    onClick={onClick}
    >
      {children}
      <div className='circle bg-white'></div>
    </Button>

  )
}

export default DarkButton