

import { Button, Navbar } from 'flowbite-react';
import Logo from "../assets/stardev.png"
import { Link, NavLink } from 'react-router-dom';

const styles = {
    "root": {
      "base": "bg-violet-500 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      "rounded": {
        "on": "rounded",
        "off": ""
      },
      "bordered": {
        "on": "border",
        "off": ""
      },
      "inner": {
        "base": "mx-auto flex flex-wrap items-center justify-between",
        "fluid": {
          "on": "",
          "off": "container"
        }
      }
    },
    "brand": {
      "base": "flex items-center"
    },
    "collapse": {
      "base": "w-full md:block md:w-auto",
      "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      "hidden": {
        "on": "hidden",
        "off": ""
      }
    },
    "link": {
      "base": "block py-2 pr-4 pl-3 md:p-0 text-white",
      "active": {
        "on": "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        "off": "text-white border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      "icon": "h-6 w-6 shrink-0"
    }
  }
export default function Navigation() {
  return (
    <Navbar fluid theme={styles}>
      <Navbar.Brand as={Link} to="/">
        {/* <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-50 dark:text-white uppercase">STARDEV Technology</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='bg-violet-400 shadow' >Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to="/"  className='text-white'>
          Home
        </Navbar.Link>
        <Navbar.Link as={NavLink} to="/#about" className='text-white'>About</Navbar.Link>
        <Navbar.Link as={NavLink} to="/#services" className='text-white'>Services</Navbar.Link>
        <Navbar.Link as={NavLink} to="/#pricing" className='text-white'>Pricing</Navbar.Link>
        <Navbar.Link as={NavLink} to="/#contact" className='text-white'>Contact</Navbar.Link>
        <Navbar.Link as={NavLink} to="/#" className='text-white'>Projects</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
