import { ContentField } from '@/shared/ContentField/ContentField'
import styles from './EpisodeList.module.scss'
import Link from "next/link"
import { FC } from "react"

interface IEpisodeList {
    episodes: string[]
    title?: string
}

export const EpisodeList: FC<IEpisodeList> = ({episodes, title}) => {
    return (
        <ContentField title={title}>
            <ul className={styles.linksContent}>
                {episodes.map((episode: string) =>
                    <li key={episode}>
                        <Link href={episode}>{episode}</Link>
                    </li>)}
            </ul>
        </ContentField>
        )
}