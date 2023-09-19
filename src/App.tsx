
import DarkButton from './components/Button'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, FileIcon } from '@radix-ui/react-icons'
import { Icon } from '@iconify/react';
import { Card } from '@radix-ui/themes';

export function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }



  return (
    <main className={`app ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-black'} min-h-screen`}>
    
      <header className={`fixed top-0 left-0 right-0 flex flex-row p-8 justify-evenly border-transparent ${isDark ? 'blur-bg-invert' : 'blur-bg'}`}>
        <nav className='flex flex-row justify-evenly w-full ' >
          <h1 className='px-4'> Sobre mim </h1>
          <h1 className='px-4 ' > Projetos  </h1>
          <h1 className='px-4'> Contato  </h1>
          <DarkButton onClick={toggleDarkMode} >
            {isDark ? <Sun/> : <Moon />}
          </DarkButton>    
        </nav>  
      </header>

    
      <div className='flex flex-row pt-72'>
        <div className=' flex flex-col ml-20 p-8 gap-4 pt-20 h-3/6 w-3/6 space-y-4 '>
          <h1 className=' text-7xl font-medium text-emerald-500'>Matheus Henrique</h1>
          <h3 className='text-3xl font-thin'>Desenvolvedor Fullstack  </h3>
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
          <div className='flex px-10 mx-10 items-center justify-content float-right'>
            <img
              src='../src/assets/temp.jpg'
              alt='Foto'
              className='rounded-full w-80   object-cover border-4 border-emerald-500 border-solid'
            />
          </div>
        </div>
        </div>

    <section className=' pt-96'>
      <div className='flex flex-row justify-evenly'>
        <h1 className='text-3xl py-7'>Tecnologias que domino</h1>
      </div>
      <div className={`flex flex-row justify-evenly items-center pt-24 ${isDark ? 'invert-colors' : ''}`}>
        <div className='flex flex-col  items-center '>
          <img src='../src/assets/react.png' alt='html' className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>React.js</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <img src='../src/assets/python.png' alt='python' className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Python</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <img src='../src/assets/typescript.png' alt='typescript' className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Typescript</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <img src='../src/assets/node-js.png' alt='node-js' className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Node.js</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <img src='../src/assets/c.png' alt='c' className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>C</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <img src='../src/assets/java.png' alt='java' className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Java</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <Icon icon="simple-icons:fastify" className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Fastify</h1>
        </div>
      </div>      
    </section>

    <section className=' pt-72 proj'>
      <div className='flex flex-row justify-evenly'>
        <h1 className='text-3xl py-7'>Projetos</h1>
      </div>
      <div className={`flex flex-row justify-evenly items-center pt-24 ${isDark ? 'invert-colors' : ''}`}>
        
          <Card className='w-80 h-80 pb-32'/>
        
          <Card className='w-80 h-80 pb-32'/>
      </div>

      <div className='pt-72'>

      </div>

    </section>
      

      
      

    </main>
  )
}


