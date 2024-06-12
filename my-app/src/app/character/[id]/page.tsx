import { CartoonCharacter } from "@/components/CartoonCharacter/CartoonCharacter";
import { getCharacter } from "@/api/rickAndMorty.service";
import { IServerSideComponentProp } from "@/interfaces/interfaces";
import styles from './character.module.scss'
import { JSONViewer } from "@/components/JSONViewer/JSONViewer";
import { EpisodeList } from "@/components/EpisodeList/EpisodeList";
import { CharacterInformation } from "@/components/CharacterInformation/CharacterInformation";

async function Character({params}: IServerSideComponentProp<{id: string}>) {
    const idCharacter: string = typeof params.id === 'string' ? params.id : ''

    const character = await getCharacter(idCharacter)
  
    return (
      <div className={styles.root}>
        <div className={styles.characterInfo}>
          <CartoonCharacter character={character} width={250} height={250} />

          <CharacterInformation character={character} />
        </div>
        
         
         <div className={styles.wrapper}>

          <div className={styles.links}>

            <EpisodeList episodes={character.episode}  title={'Серии с ' + character.name}/>
          </div>
        
          <JSONViewer json={character} className={styles.json}/>
        </div>
        
      </div>
    )
  }

  export default Character