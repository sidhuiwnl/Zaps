
interface Type {
    id : string;
    name: string;
    image?: string;
}

export  interface Actions{
    id : string
    zapId  : string
    actionId : string
    metadata : string
    sortingOrder : number
    type : Type

}

export interface Trigger{
    id: string
    zapId: string
    "triggerId": string
    type: Type
}

export interface Zaps{
    id : string
    triggerId : string
    userId : string
    zapRunId : string
    actions : Actions[];
    triggers : Trigger;
    isActive: boolean;
    createdAt : Date;
    updatedAt : Date;
}