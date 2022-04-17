import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Avatar() {
    return (
        <Section>
            <div className="image">
                <img src='' alt="User's Profile Image" />
            </div>
            <div className="name">
                <span>User's Name</span>
                <FontAwesomeIcon icon={faCircleChevronDown} />
            </div>
        </Section>
    );
};

const Section = styled.section`
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 0.1rem solid #242424;
  padding-bottom: 1rem;
  .image {
    img {
      height: 3rem;
      border-radius: 2rem;
    }
  }
  .name {
    display: flex;
    align-content: center;
    gap: 0.5rem;
    svg {
      color: var(--primary-color);
      font-size: 1.3rem;
    }
  }
`