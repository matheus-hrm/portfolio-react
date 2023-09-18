import { Theme } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'
import { Moon } from 'lucide-react'

export function App() {
  return (
    <Theme 
    appearance='dark' 
    accentColor='iris'
    radius='full'
    >
    <section className='min-h-screen flex flex-row px-6 py-4 justify-evenly border-b' >
      <nav className='flex flex-row justify-evenly w-full h-full' >
        <h1 className='px-4'> Sobre mim </h1>
        <h1 className='px-4'> Projetos  </h1>
        <h1 className='px-4'> Contato  </h1>
        <Button variant='outline' radius='full'>
          <Moon />
        </Button>
        
      </nav>
    </section>
    </Theme>
        
  )
}


