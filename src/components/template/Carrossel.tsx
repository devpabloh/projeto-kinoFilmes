'use client'
import {useRef, useState} from 'react'
import Container from "./Container"
import Wrap from "./Wrap"
import Flex from "./Flex"
import mergeClasses from "@/utils/mergeClasses"
import { Children, cloneElement } from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"

interface CarrosselProps{
  children: JSX.Element[]
  slideAutomatico?: boolean
}

function BotaoLateral(props: {esquerda?:boolean, direita?: boolean, children: React.ReactNode }){
  return(
        <button type="button" className={mergeClasses(`group absolute top-0 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`, {"left-0":props.esquerda, "right-0":props.direita})}>
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white group-hover:bg-gray-800/60`}>
            {props.children}
          </span>
        </button>
  )
}

export default function Carrossel({children, slideAutomatico}: CarrosselProps){
  const carrosselRef = useRef(null)
  const intervalRef = useRef()
  const animacaoRef = useRef()
  const [indiceAtual, setIndiceAtual] = useState(0)
  const NUMERO_DE_ITENS = children.length

  function proximoSlide(){
    setIndiceAtual((indiceAnterior:number)=>{
      return indiceAnterior === NUMERO_DE_ITENS -1 ? 0: indiceAnterior +1
    })
  }

  function slideAnterior(){
    setIndiceAtual((indiceAnterior:number)=>{
      return indiceAnterior === 0? NUMERO_DE_ITENS -1: indiceAnterior -1
    })
  }

  return(
    <Wrap>
      <Container>
        <Wrap>
          <div className="relative rounded-lg mb-5">
            {Children.map(children, (filho: JSX.Element, i)=>{
              const propsFilho = filho.props
              return cloneElement(filho, {
                className: `${i === indiceAtual ? "": "hidden"}`
              })
            })}
          </div>
          <Flex className="absolute bottom-5 left-1/2 z-30 translate-x-1/2 gap-2">
            {Array.from({length: NUMERO_DE_ITENS}).map((_,i)=>{
              return (
                <button type="button" key={i} className={mergeClasses("h-3 w-3 rounded-full bg-gay-800", {"bg-gray-500": i === indiceAtual})}></button>
              )
            })}
          </Flex>
        </Wrap>
      </Container>
      <BotaoLateral esquerda>
        <CaretLeft size={20}/>
        <span className="hidden">Anterior</span>
      </BotaoLateral>
      <BotaoLateral direita>
        <CaretRight size={20}/>
        <span className="hidden">Próximo</span>
      </BotaoLateral>
    </Wrap>
  )   
}