import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaSun, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoBox = styled.span`
  background-color: #3b82f6;
  color: white;
  font-weight: bold;
  padding: 0.4rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const LogoText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1f2937;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  li {
    position: relative;
    cursor: pointer;
    color: #1f2937;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const DropdownMenu = styled(motion.ul)`
  position: absolute;
  top: 2.2rem;
  left: 0;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
  width: 160px;
  z-index: 10;

  li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: #374151;

    &:hover {
      background-color: #f3f4f6;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .icon {
    font-size: 1.1rem;
    color: #374151;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const GetStartedButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: scale(1.05);
  }
`;

// Animation Variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSearch = () => {
    alert('Search button clicked!');
  };

  const handleTheme = () => {
    alert('Theme switch (dark/light) clicked!');
  };

  const handleGetStarted = () => {
    alert('Navigating to Get Started!');
  };

  return (
    <NavbarContainer
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <LeftSection>
        <Logo>
          <LogoBox>T3</LogoBox>
          <LogoText>T3shiva</LogoText>
        </Logo>

        <NavLinks>
          {['Demo', 'Layouts', 'Pages', 'Elements'].map((item) => (
            <li key={item} onClick={() => handleDropdown(item)}>
              {item}
              <FaChevronDown size={10} />
              <AnimatePresence>
                {openDropdown === item && (
                  <DropdownMenu
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {item === 'Demo' ? (
                      <li onClick={() => navigate('/MoveGym')}>Demo 1 - Move Gym</li>
                    ) : (
                      <>
                        <li>{item} 1</li>
                        <li>{item} 2</li>
                        <li>{item} 3</li>
                      </>
                    )}
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </li>
          ))}
          <li onClick={() => alert('News clicked!')}>News</li>
        </NavLinks>
      </LeftSection>

      <RightSection>
        <FaSearch className="icon" onClick={handleSearch} />
        <FaSun className="icon" onClick={handleTheme} />
        <GetStartedButton onClick={handleGetStarted}>Get Started</GetStartedButton>
      </RightSection>
    </NavbarContainer>
  );
};

export default Navbar;
