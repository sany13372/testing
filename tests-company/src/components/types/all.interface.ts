import { Dispatch, SetStateAction } from "react"

export interface IData{
    info:{
        timestamp:number
        quote:number
        }
    query:{
        from:string
        to:string
        amount:number
        }
    result:number
    success:boolean
}

export interface IBlockConvert{
    title:string
    value:string
    currency:string
    setConvert:Dispatch<SetStateAction<string>>
    onChangeValue?:Dispatch<SetStateAction<string>>
    disabled?:boolean
}

export interface IOptionsCurrencies {
    setConvert:Dispatch<SetStateAction<string>>
    currency:string
}