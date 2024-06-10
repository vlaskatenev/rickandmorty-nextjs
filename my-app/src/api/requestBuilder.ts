interface IrequestBuilder {
    url: string
}

export const requestBuilder = async <Res>({ url }: IrequestBuilder): Promise<Res> => { 
    const result: Res = await fetch(url).then((res) => res.json())
    return result
}