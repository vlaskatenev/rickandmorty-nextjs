import styles from './CharacterInformation.module.scss'
import { ContentField } from '@/shared/ContentField/ContentField'
import { IGetCharacter } from '@/interfaces/interfaces'

interface ICharacterInformation {
    character: IGetCharacter
}

export function CharacterInformation({character}: ICharacterInformation) {

  return (
    <ContentField 
        className={styles.infoCharacter} 
        contentStyle={{color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0)'}}
        >
        <h4>name: {character.name}</h4>
        <p>status: {character.status}</p>
        <p>gender: {character.gender}</p>
        <p>location: {character.location.name}</p>
    </ContentField>
  );
}