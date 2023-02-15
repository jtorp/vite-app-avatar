import React from 'react'
import { Disclosure, Transition} from '@headlessui/react'
import logo from '../logo.png'
import {Bars3BottomLeftIcon, XCircleIcon} from'@heroicons/react/24/outline'

const Nav = ({goHome, goToPostAvatar, goToPrompts}) => {
  const navigation = [
    {
      name: 'new',
      current:false,
      onClick: goToPostAvatar
    },
    {
      name:'prompts',
      current:false,
      onClick: goToPrompts
    }
  ]

  const setClassName = (...classes)=>{
      return classes.filter(Boolean).join('')
  }
  return (
    <Disclosure className='bg-purple-500 z-50'>
    {({ open }) => (
      <>
        <div className="max-w-5xl mx-auto pt-2 px-3 lg:px-8">
          <nav className="flex items-center justify-between h-14">
            <div className="sticky inset-y-0 left-0 flex items-center sm:hidden">
              {/* mobile button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded text-yellow-50">
                <span className="sr-only">open hamburger menu</span>
                {
                  open ?(
                    <XCircleIcon className="h-8 w-8 text-gray-400 "/>
                  )
                  :(
                    <Bars3BottomLeftIcon className="h-8 w-8 text-gray-200"/>
                  )
                }
              </Disclosure.Button>
            </div>
              <div className="flex flex-1 items-center justify-center">
                <button onClick={goHome}>
                  <img src={logo} alt="g_logo"
                  className='block  h-10 w-auto'/>
              
                </button>
              </div>
                {/* items start */}
              <div className="hidden sm:flex space-x-10">
                  <div className="flex  space-x-8">
                    {navigation.map((item) =>(
                      <button 
                      key={item.name}
                      onClick={item.onClick}
                      className={setClassName(item.current ? 'bg-red-500 text-white ': 'text-gray-300 cursor-pointer hover:text-yellow-400', ' px-3 py-2 rounded text-sm font-normal ')}
                      aria-current={item.current ? 'page': undefined}
                      >
                        {item.name}
                      </button>
                    ))}

                  </div>
                </div>
             {/* items end */}

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                         
            </div>
          </nav>
        </div>

        <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}
            <Disclosure.Panel className="sm:hidden px-2">
              <div className="px-2 pr-2 pb-3 space-y-2 bg-gray-800 rounded z-30 flex flex-col gap-y-4">
                {navigation.map((item)=>(
                   <Disclosure.Button
                   key={item.name}
                   onClick={item.onClick}
                   as="a"
                   >
                   {item.name}
                 </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>

      </>
    )}
  </Disclosure>
  )
}

export default Nav

