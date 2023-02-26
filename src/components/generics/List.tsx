type TListProps<T> = {
    title: string
    list: T[]
    clickList: (data: T) => void
}

export const List = <T extends {}>({ title, list, clickList }: TListProps<T>) => {
    return (
        <div>
            <h1>{title}</h1>
            {list.map((item, idx) => {
                const dataProductObj = JSON.stringify(item)
                const parsingDataObj = JSON.parse(dataProductObj)
                return (
                    <ul key={idx} onClick={() => clickList(item)}>
                        {typeof item === 'object' ? (
                            <li>
                                <span>nama produk : {parsingDataObj.nameProduk}</span>
                                <br />
                                <span>discount : {parsingDataObj.discount}</span>
                            </li>
                        ) : (
                            <li>
                                {dataProductObj.split('"')}
                            </li>
                        )}
                    </ul>
                )
            })}
        </div>
    )
}