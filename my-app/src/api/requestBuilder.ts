interface IrequestBuilder<Res> {
    url: string
    initialData?: Res
}

export const requestBuilder = async <Res>({ url, initialData }: IrequestBuilder<Res>): Promise<Res> => { 
    let result
    try {
        result = await fetch(url).then((res) => res.json())

        if(result.error) {
            throw new Error(JSON.stringify(result))
        }

    } catch (error) {
        if (initialData) result = initialData
        console.error(
            `-----start----
            ${error}
             url: ${url}
            -----end-----
                `)
    }
    
    return result
}