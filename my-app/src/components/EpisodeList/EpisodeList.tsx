import Link from "next/link"
import { FC } from "react"

interface IEpisodeList {
    episodes: string[]
}

export const EpisodeList: FC<IEpisodeList> = ({episodes}) => {
    return <div>
        {episodes.map((episode: string) => 
            <p key={episode}>
                <Link href={episode}>{episode}</Link>
            </p>)}
        </div>
}