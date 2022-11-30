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
    result:number | string
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

export interface IField{
    value:string
    onChangeValue?:Dispatch<SetStateAction<string>>
    disabled?:boolean
} 

export interface IDataCourses{
    quotes:[]
    source:string
    success:boolean
    timestamp:number
}

export interface ICourses{
    0:string
    1:number
}

export interface ICourse{
    course:[string, number]
    courseDefault:string
}

export interface ICourseBlock{
    courses:[string, number][]
    isLoading:boolean
    courseDefault:string
}

export interface ISearchCourse{
    setCourse:Dispatch<SetStateAction<string>>
    value:string
}