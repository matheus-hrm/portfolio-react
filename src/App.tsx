
import DarkButton from './components/Button'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Icon } from '@iconify/react';
import ContactUs from './components/EmailForm';

export function App() {
  const [isDark, setIsDark] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <main className={`app ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-black'} min-h-screen`}>
      <header className={`fixed top-0 left-0 right-0 flex flex-row p-8 justify-evenly border-transparent ${isDark ? 'blur-bg-invert' : 'blur-bg'}`}>
        <nav className='flex flex-row justify-evenly w-full ' >
          <h1 className='px-4'> <a href="#sobre">    Sobre mim </a></h1>
          <h1 className='px-4 ' ><a href="#projetos"> Projetos  </a></h1>
          <h1 className='px-4'> <a href="#contato">  Contato   </a></h1>
          <DarkButton onClick={toggleDarkMode}  >
            {isDark ? <Sun/> : <Moon />}
          </DarkButton>    
        </nav>  
      </header>
    
      <div className='flex flex-row pt-72' id="sobre">
        <div className=' flex flex-col ml-20 p-8 gap-4 pt-20 h-3/6 w-3/6 space-y-4' >
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
              <a className='pl-14 ' href='https://drive.google.com/file/d/1g8PHOLIPTxKGQLRFMJA4XrcGGXAVK6ue/view?usp=sharing' target="_blank">
                <label htmlFor="file" className='cursor-pointer flex flex-row ' >
                  <Icon icon="majesticons:document-line" className='w-9 h-9'/> 
                  <span className='pl-3 pt-1  font-semibold'>Currículo</span>
                </label>
              </a>
            </div>
        </div>
        
        <div className='flex float-right mx-20 px-8 pt-15 items-center'>
          <div className='flex px-10 mx-10 items-center justify-content float-right'>
            <img
              src='https://github.com/matheus-hrm/portfolio-react/blob/main/src/assets/2-cat-programmer_4x-397008480-removebg-preview.png?raw=true'
              alt='Foto'
              className='rounded-full w-80 h-80 object-cover border-4 border-emerald-500 border-solid'
            />
          </div>
        </div>
        </div>

    <section className=' pt-96'>
      <div className='flex flex-row justify-evenly'>
        <h1 className='text-3xl py-7'>Tecnologias estou estudando</h1>
      </div>
      <div className={`flex flex-row justify-evenly items-center pt-24 ${isDark ? 'invert-colors' : ''}`}>
        <div className='flex flex-col  items-center '>
        <Icon icon="mdi:react"  className='w-24 h-24'/>
          <h1 className='py-5 font-semibold'>React.js</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <Icon icon="cib:python" className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Python</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <Icon icon='simple-icons:typescript' className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Typescript</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <Icon icon="mdi:nodejs" className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Node.js</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <Icon icon="devicon-plain:c" className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>C</h1>
        </div>
        <div className='flex flex-col py-5 items-center '>
          <Icon icon="bxl:java" className='w-20 h-20'/>
          <h1 className='py-5 font-semibold'>Java</h1>
        </div>
      </div>      
    </section>

    <section className=' pt-72 proj' id='projetos'>
      <div className='flex flex-row justify-evenly'>
        <h1 className='text-3xl py-7'>Projetos</h1>
      </div>
      <div className={`flex flex-row overflow-x-auto pt-24`}>          
        <div className="container mx-auto px-4 p-4 w-2/6 border-2 border-emerald-600 rounded-xl ">
          <a href='https://github.com/matheus-hrm/Flappy-Bird' target="_blank">
          <h6 className='font-semibold p-6'>Flappy Bird</h6>
          <img className='p-4'src="https://github.com/matheus-hrm/portfolio-react/blob/2829cc2716a4cc34a1431a183377b789b6842b7a/src/assets/fb.png?raw=true"></img>
          <div className='p-4 rounded-lg shadow-md border-gray-100 border'>
            <p className=' text-center'>Projeto final para a disciplina de Introdução a Programação que consiste na criação de um jogo clone do flappy bird em C utilizando a biblioteca Allegro</p>
          </div>
          </a>
        </div>
        <div className="container mx-auto px-4 p-4 w-2/6 border-2 border-emerald-600 rounded-xl ">
          <a href='https://github.com/matheus-hrm/transcription.ai' target="_blank">
          <h6 className='font-semibold p-6'>transcription.ai</h6>
          <img className='px-4 py-2 w-full'src="https://github.com/matheus-hrm/portfolio-react/blob/main/src/assets/tcpt-ai.png?raw=true"></img>
          <div className='p-4 rounded-lg shadow-md border-gray-100 border'>
            <p className=' text-center'>Projeto feio durante a NLW da Rocketseat utilizando React.js, Typescript e integração com API da OpenAI, que realiza transcrição de vídeos e gera prompts com base nela. </p>
          </div>
          </a>
        </div>
      </div>
      <div className='pt-72'>
      </div>

    </section>

    <section className=' pt-56' id="contato">
      <h1 className='text-3xl py-12 pl-56'>Contato</h1>
      <footer className=' flex flex-row justify-between bg-emerald-600'>
        
        <div className='flex flex-row pl-48 pt-32 '>
          <a href='https://github.com/matheus-hrm' target="_blank"  className=''>
            <GitHubLogoIcon className=' w-16 h-16 '/>
          </a>
          <a href='https://www.linkedin.com/in/matheus-henrique-rodrigues-magalh%C3%A3es/' target="_blank" className='pl-14'>
            <LinkedInLogoIcon className=' w-16 h-16 '/>
          </a>
          <div>
            <div className='pl-14 '>
              <button>
                <Icon 
                  icon="akar-icons:whatsapp-fill" 
                  className='w-16 h-16'
                  onClick={() => setIsPopupOpen(!isPopupOpen)}
                  />
              </button>
              {isPopupOpen && (
                <div className="flex items-center justify-content opacity-100 inset-0 bg-black ">
                  <div 
                    className='w-384 absolute flex flex-col items-center ml-56 mt-20 p-8 shadow-lg transition-all duration-200 ease-in-out transform '>
                    <img
                    src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/5564992602624'
                    alt = 'qr code'
                    className='max-w-full mx-auto'
                    >
                    </img>
                    <button 
                      onClick={() => setIsPopupOpen(!isPopupOpen)}
                      className="bg-red-500 text-white ml-16 mt-4 px-4 py-2 rounded hover:bg-red-600 focus:outline-none transition-opacity duration-300 ease-in-out"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <ContactUs />
        
      </footer>
    </section>

    </main>
  )
}


