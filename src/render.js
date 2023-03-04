import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContextProvider } from './context/ContextProvider';
import App1 from './App1';
import { SiGmail } from 'react-icons/si';
import { signInWithGoogle, signOutWithGoogle } from './servises/firebase';


import { Download, Features, SectionWrapper } from './component';
import assets from './assets';
import styles from './styles/Global';
import { SiShopware } from 'react-icons/si';






function Demo()
{
    



  const updatestate = () => {
     ReactDOM.render(
    <React.StrictMode>
      <ContextProvider>
        <App1 />

      </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  ); 

  }

  return (

     <>
      <SectionWrapper 
        title="Your own Dashboard of Ace Dashboard. Start Using & Growing"
        description="Show the Data, Add Calendar remainder, To-Do list. Don't get stuck using different Apps. Ace Dashboard is there for you."
        showBtn
        mockupImg={assets.homeHero1}
        banner="banner"
      />

      <SectionWrapper 

        title="Smart User Interface Dashboard"
        description="Experience a buttery UI of Our Ace Dashboard. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Features"
        description="Ace Dashboard is built for Admins, where you can get all the Features he wants, in a single App natively on all devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
     
     

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <div className="flex justify-center items-center gap-2">
          <SiShopware /><span  className="bold"> Ace </span>
          </div>

         
              
           
        </p>
      </div>
    </>
    
    // <div class="min-h-screen flex items-center justify-center bg-blue-600">Login Through Google
    
    //      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    //      onClick={signInWithGoogle}>
    //             <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    
    //                 <SiGmail />
    //             </span>
    //         </button>

            
    // </div>

    )
  
}


 
export default Demo;