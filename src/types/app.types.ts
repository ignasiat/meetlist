export type Heroe = {
  id: number,
  name: string,
  description: string,
  modified: Date,
  resourceURI: string,
  urls: [
    {
      type: string,
      url: string
    }
  ],
  thumbnail: {
    path: string,
    extension: string
  }
};

export type ApiResponseHeroes = {
  data: {
    data: {
      results: Heroe[]
    }
  }
}

export type HeroesActions = {
  type: string,
  payload: any
}

export type HeroeState = {
  heroesList: undefined | null | Heroe[],
  heroeDetail: undefined | null | Heroe,
  heroeError: any | null | undefined
}

export type RootState = {
  heroes: HeroeState
}
