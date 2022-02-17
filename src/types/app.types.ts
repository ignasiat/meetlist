type Url = {
  type: string;
  url: string;
}

export type Heroe = {
  id: number,
  name: string,
  description: string,
  modified: Date,
  urls: Url[],
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
  heroeError: any
}

export type RootState = {
  heroes: HeroeState
}
