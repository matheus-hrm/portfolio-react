import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

interface FormState {
  user_name: string;
  user_email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_q4tpskj', 'template_h9bedel' , form.current, 'jZ_fduCeK77OORZKF')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  const validateEmail = (email: string) => {
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regex.test(email));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      }));
    if (name === 'user_email') {
      validateEmail(value);
    };
  };  

  return (
    <div className='flex flex-row items-center gap-4 pr-56 pt-24 pb-24 text-black' >
      
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center space-y-3'>
        <h2 className='text-2xl pb-4'>entre em contato comigo!</h2>
        <label className='text-xl'>seu nome</label>
        <input 
          type="text" 
          name="user_name" 
          className='rounded-lg border-solid border-2 border-neutral-700 w-96 h-8'
          value={formData.user_name}
          onChange={handleInputChange} 
        />
        <label className='text-xl'>seu email</label>
        <input 
        type="email" 
        name="user_email" 
        className='rounded-lg border-solid border-2 border-neutral-700 w-96 h-8'
        value = {formData.user_email}
        onChange={handleInputChange}
        />
        <label className='text-xl'>sua mensagem</label>
        <textarea 
          name="message" 
          className='rounded-lg border-solid border-2 border-neutral-700 w-96 h-24 resize-none '
          value={formData.message}
          onChange={handleInputChange}
        />
        <button 
          type="submit" 
          className='flex flex-row space-x-2 items-center justify-center w-96 h-12 bg-neutral-700 rounded-lg text-white'
        >
          enviar 
          <Send 
            className='pl-2 w-8 h-8'
          /> 
        </button>
        
      </form>
    </div>
  );
};

export default ContactUs;
