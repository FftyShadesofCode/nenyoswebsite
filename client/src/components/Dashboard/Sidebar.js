import React from 'react'
import styled from 'styled-components'
import {
    ImUsers,
    ImEnvelop,
    ImAddressBook,
    ImFileText,
    ImUserTie,
    ImHome3,
    ImStatsDots,
    ImManWoman, ImTree,
    ImImages
} from "react-icons/im";


export default function Sidebar() {
    return (
        <Aside id='sidebar'>
            <div className='brand'>
                <ImHome3 />
            </div>
            <ul className='links'>
                <li className='selected'>
                    <ImUsers />
                </li>
                <li>
                    <ImUserTie />
                </li>
                <li>
                    <ImFileText />
                </li>
                <li>
                    <ImStatsDots />
                </li>
                <li>
                    <ImAddressBook />
                </li>
                <li>
                    <ImTree />
                </li>
                <li>
                    <ImManWoman />
                </li>
                <li>
                    <ImEnvelop />
                </li>
                <li className='help'>
                    <ImImages />
                </li>
            </ul>
        </Aside>
    );
};

const Aside = styled.aside`
  background-color: var(--dark-background-color);
  height: 100%;
  width: max-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .help {
    svg {
      transition: 0.5s ease-in-out;
      cursor: pointer;
      color: white;
    }
    &:hover {
      svg {
        color: var(--primary-color);
      }
    }
  }
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
  .brand {
    svg {
      font-size: 2.5rem;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    li {
      border-radius: 1rem;
      padding: 0.5rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: white;
      }
      &:hover {
        box-shadow: 0 0 60px 8px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 60px 8px var(--primary-color);
      svg {
        color: var(--primary-color);
        background-color: transparent;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
    .links,
    .help {
      display: none;
    }
  }
`;
