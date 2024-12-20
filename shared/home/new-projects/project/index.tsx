"use client";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export const Project = ({ index, title, setModal, tag }: any) => {
  const router = useRouter();
  return (
    <ProjectWrapper
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      onClick={() =>
        router.push(`/projects/${title.split(" ").join("-").toLowerCase()}`)
      }
      className="project flex w-full hover:opacity-50 justify-between items-center md:py-[30px] p-[20px_40px] border-t-[0.5px] border-white/25 cursor-pointer transition-all duration-300"
    >
      <h2 className="md:text-[60px] text-[30px]">{title}</h2>
      <p className="capitalize text-white/50">{tag}</p>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
    margin: 0px;
    font-weight: 400;
    transition: all 0.4s;
  }

  & p {
    transition: all 0.4s;
    font-weight: 300;
  }
`;
