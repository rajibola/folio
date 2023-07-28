"use client";
import React from "react";
import styled from "styled-components";

export const Project = ({ index, title, setModal }: any) => {
  return (
    <ProjectWrapper
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex w-full hover:opacity-50 justify-between items-center py-[50px] px-[100px] border-t border-slate-500 cursor-pointer transition-all duration-300"
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px 50px 100px;
  border-top: 1px solid rgb(201, 201, 201);
  cursor: pointer;
  transition: all 0.2s;

  &:last-of-type {
    border-bottom: 1px solid rgb(201, 201, 201);
  }

  &:hover {
    opacity: 0.5;
  }

  &:hover h2 {
    transform: translateX(-10px);
  }

  &:hover p {
    transform: translateX(10px);
  }

  & h2 {
    font-size: 60px;
    margin: 0px;
    font-weight: 400;
    transition: all 0.4s;
  }

  & p {
    transition: all 0.4s;
    font-weight: 300;
  }
`;
