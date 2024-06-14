import Image from 'next/image'
import { IServerSideComponentProp } from '@/interfaces/interfaces'
import styles from './episode.module.scss'
import { ContentField } from '@/shared/ContentField/ContentField'
import { getEpisodeCharacters, getMultipleCharacters } from '@/api/rickAndMorty.service'
import { CharacterInformation } from '@/components/CharacterInformation/CharacterInformation'
import Link from 'next/link'

async function Episode({params}: IServerSideComponentProp<{id: string}>) {
    const idEpisode: string = typeof params.id === 'string' ? params.id : ''

    const episodeInformation = await getEpisodeCharacters(idEpisode)

    const charactersIndex = episodeInformation.characters.map(el => {
        const splittedURL = el.split('/')
        return Number(splittedURL[splittedURL.length - 1])
    })
    
    const characters = await getMultipleCharacters(charactersIndex)

    return (<div className={styles.root}>
         <h3>Персонажи эпизода {episodeInformation.episode}</h3>
            <div className={styles.characters}>
                {characters.map((character) => {
                    return (
                        <ContentField 
                            key={character.id} 
                            title={<Link href={'/character/' + character.id}>{character.name}</Link>} 
                            className={styles.character}
                            >
                            <div className={styles.character}>
                                <Image
                                    src={character.image}
                                    width={200}
                                    height={200}
                                    alt={character.name}
                                    />
                            <CharacterInformation character={character} />
                            </div>
                        </ContentField>)})}
            </div>
    </div>)
}

export default Episode