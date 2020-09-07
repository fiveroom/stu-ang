export interface IProItem {
    name: string,
    price: number,
    description: string,
    id: number,
    fId: number,
}

export interface IProFItem {
    title: string,
    id: number,
    fId: number,
    children: IProItem[]
}
