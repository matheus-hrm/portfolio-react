
import { Separator } from '@radix-ui/themes'
import DarkButton from './components/Button'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, FileIcon } from '@radix-ui/react-icons'

export function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }


  return (
    <main className={`app ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-black'} min-h-screen`}>
    
      <section className=' flex flex-row p-8 justify-evenly  border-transparent' >
        <nav className='flex flex-row justify-evenly w-full ' >
          <h1 className='px-4'> Sobre mim </h1>
          <h1 className='px-4'> Projetos  </h1>
          <h1 className='px-4'> Contato  </h1>
          <DarkButton onClick={toggleDarkMode} >
            {isDark ? <Sun/> : <Moon />}
          </DarkButton>    
        </nav>  
      </section>

    
      <div className='flex flex-row mt-20'>
        <div className=' flex flex-col ml-20 p-8 gap-4 pt-20 h-3/6 w-3/6 space-y-4 '>
          <h1 className='text-5xl font-medium text-emerald-500'>Matheus Henrique</h1>
          <h3 className='text-3xl font-thin'>Fullstack Developer</h3>
          <span>Tenho 20 anos, desde muito jovem apaixonado por tecnologia, atualmente estudo diversas áreas do desenvolvimento de software como front e back-end</span>
            <div className='flex flex-row items-center justify-content w-3/6'>
              <a href='https://github.com/matheus-hrm' target="_blank"  className=''>
                <GitHubLogoIcon className=' w-8 h-8 space-y-8'/>
              </a>
              <a href='https://www.linkedin.com/in/matheus-henrique-rodrigues-magalh%C3%A3es/' target="_blank" className='pl-14'>
                <LinkedInLogoIcon className=' w-8 h-8 space-y-8'/>
              </a>
              <a className='pl-14 '>
                <label htmlFor="file" className='cursor-pointer flex flex-row border-5 border-zinc-950 border-solid  '>
                  <FileIcon className='w-8 h-8'/>
                  <h1 className='pl-3 pt-1 text-sm font-semibold'>Curriculum</h1>
                </label>
              </a>
            </div>
        </div>
        
        <div className='flex float-right mx-20 px-8 pt-15 items-center'>
          <div className='flex px-10 mx-10 items-center justify-content '>
            <img
              src='../src/assets/temp.jpg'
              alt='Sua Foto'
              className='rounded-full w-3/6 object-cover border-4 border-emerald-500 border-solid'
            />
          </div>
        </div>
        </div>

    <section className='pt-20'>
      <div className='flex flex-row justify-evenly'>
        <h1 className='text-3xl'>Tecnologias que uso</h1>
      </div>

      
      
    </section>
      

      
      

    </main>
  )
}


