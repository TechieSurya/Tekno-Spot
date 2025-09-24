"use client";
import React, { useState } from 'react';
import ContactPopup from '@/components/ContactPopup';
import { SVGProps } from "react";
import { ChevronDown, Menu } from 'lucide-react';
import { 
 LayoutTemplate,
 ChevronsLeftRightEllipsis,
 TabletSmartphone,
 SearchCheck,
 Megaphone
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

interface DropdownItem {
  title: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}

interface NavItem {
  title: string;
  href?: string;
  dropdown?: {
    sections: {
      title: string;
      items: DropdownItem[];
    }[];
  };
}

const Navigation = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about-us"
    },
    {
      title: "Services",
      dropdown: {
        sections: [
          {
            title: "Design & Development",
            items: [
              {
                title: "Web Design",
                icon: LayoutTemplate,
                href: "/web-design-company-in-trichy"
              },
              {
                title: "Web Development",
                icon: ChevronsLeftRightEllipsis,
                href: "/web-development-company-in-trichy"
              },
              {
                title: "App Development",
                icon: TabletSmartphone,
                href: "/mobile-app-development-company-in-trichy"
              }
            ]
          },
          {
            title: "Digital Marketing",
            items: [
              {
                title: "SEO Services",
                icon: SearchCheck,
                href: "/seo-company-in-trichy"
              },
              {
                title: "Social Media Marketing",
                icon: Megaphone,
                href: "/social-media-marketing-company-in-trichy"
              }
            ]
          }
        ]
      }
    },
    {
      title: "Careers",
      href: "/careers"
    },    
     {
      title: "Blogs",
      href: "/blogs"
    },   
    {
      title: "Contact",
      href: "/contact-us"
    }
  ];

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Image 
          width={200}
          height={100}
          src= "/images/Logo.png" alt="Logo"  className='w-36'/>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button className="flex items-center rounded-lg hover:text-white hover:bg-red-600 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className=" hover:bg-red-500  rounded-lg hover:text-white px-3 py-2 text-sm font-semibold transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.title && (
                    <div className={`absolute top-full left-0 mt-1 rounded-lg shadow-xl bg-white z-[9999] ${
                      item.title === 'Services' ? 'w-96 lg:w-[32rem]' : 'w-96'
                    }`}>
                      <div className="p-6">
                        <div className={`grid gap-6 ${
                          item.title === 'Services' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'
                        }`}>
                          {item.dropdown.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h3 className="text-xs font-semibold uppercase tracking-wide mb-3">
                                {section.title}
                              </h3>
                              <div className="space-y-1">
                                {section.items.map((dropdownItem, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    href={dropdownItem.href}
                                    className="flex items-center p-3 rounded-lg hover:bg-red-600 transition-colors duration-200 group"
                                  >
                                    <div className="flex-shrink-0">
                                      <dropdownItem.icon className="h-6 w-6 group-hover:text-white" />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-sm font-medium  group-hover:text-white group-hover:font-semibold">
                                        {dropdownItem.title}
                                      </p>
                                      {/* <p className="text-xs text-gray-400 group-hover:text-gray-300">
                                        {dropdownItem.description}
                                      </p> */}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Sign In Button */}
          <div className="hidden md:block">
            <button 
            onClick={openPopup}
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold  transition-all duration-300 bg-brandYellow rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 hover:shadow-2xl ease focus:outline-none">
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
            <svg className="relative w-5 h-5 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Enquiry Now
             </span>
            </button>
             <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
    <SheetTrigger asChild>
      <button className="font-semibold p-2">
        <Menu className="h-6 w-6 text-black" />
      </button>
    </SheetTrigger>
    <SheetContent side="right" className="w-80 bg-white text-black"> {/* <-- Ensures black text globally */}
      <SheetHeader>
        <SheetTitle className="text-left text-black"></SheetTitle>
      </SheetHeader>
      <div className="flex flex-col space-y-4 mt-6">
        {navItems.map((item) => (
          <div key={item.title}>
            {item.dropdown ? (
              <div>
                <button
                  onClick={() => toggleMobileDropdown(item.title)}
                  className="flex items-center justify-between w-full text-black hover:text-red-500 px-3 py-2 text-sm font-semibold "
                >
                  {item.title}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeMobileDropdown === item.title ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {activeMobileDropdown === item.title && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="text-xs font-semibold uppercase tracking-wide mb-2 ml-3">
                          {section.title}
                        </h4>
                        <div className="space-y-1">
                          {section.items.map((dropdownItem, itemIndex) => (
                            <a
                              key={itemIndex}
                              href={dropdownItem.href}
                              className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex-shrink-0">
                                <dropdownItem.icon className="h-5 w-5 text-black group-hover:text-black" />
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium text-black">
                                  {dropdownItem.title}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                className="block text-black hover:text-black font-semibold px-3 py-2 text-sm  transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            )}
          </div>
        ))}
        <div className="pt-4 border-t border-gray-200">
          <button 
          onClick={() => (window.location.href = 'tel:+917604921773')}
          className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold  transition-all duration-300 bg-brandYellow rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
            <svg className="relative w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Contact Now
             </span>
            </button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;