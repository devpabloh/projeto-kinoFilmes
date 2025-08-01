
import Container from "./Container"
import Wrap from "./Wrap"
import Flex from "./Flex"
import mergeClasses from "@/utils/mergeClasses"
import { Children, cloneElement } from "react"
import { CaretLeftIcon } from "@phosphor-icons/react"

interface CarrosselProps{
  children: JSX.Element[]
  slideAutomatico?: boolean
}

function BotaoLateral(props: {esquerda?:boolean, direita?: boolean, children: React.ReactNode }){
  return(
        <button className={mergeClasses(`group absolute top-0 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`, {"left-0":props.esquerda, "right-0":props.direita})}>
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-700/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white group-hover:bg-gray-800/60`}>
            <CaretLeftIcon size={20}/>
            <span className="hidden">Anterior</span>
          </span>
        </button>
  )
}

export default function Carrossel({children, slideAutomatico}: CarrosselProps){
  const indiceAtual = 0 
  const NUMERO_DE_ITENS = children.length

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
                <button type="button" key={i} className={mergeClasses("h-3 w-3 rounded-full bg-gay-800", {"bg-gray-500": i=== indiceAtual})}></button>
              )
            })}
          </Flex>
        </Wrap>
      </Container>
      <Wrap>
        
      </Wrap>
    </Wrap>
  )   
}