  interface Origin {
    name: string
    url: string
  }

interface Location {
    name: string
    url: string
  }

export interface IGetCharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
  }

export interface IServerSideComponentProp<
    Params,
    SearchParams = undefined,
> {
    params: Params;
    searchParams: SearchParams;
}

export interface IMenuItem {
  id: number,
  name: string,
  slug: string,
  icon?: string,
  theme?: 'multi_layered',
  link?: string,
  colors?: string[],
  hover?: string,
  modalId?: string,
  type?: string,
  altText: string,
}

export interface TEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface InfoEpisodes {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface IEpisodes {
  info: InfoEpisodes
  results: TEpisode[];
}
