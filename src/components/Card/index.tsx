import React from 'react';

import * as S from './styles';

import pokeballImage from '../../assets/img/pokeball.png';
import pokeballCardImage from '../../assets/img/pokeballCard.png';
import dotsImage from '../../assets/img/dots.png';

type PokemonType = {
  type: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
};

type CardProps = {
  data: Pokemon;
};

export function Card({ data }: CardProps) {
  return (
    <S.PokemonCard type={data.types[0].type.name} onPress={() => {}}>
      <S.LeftSide>
        <S.PokemonId>#{data.id}</S.PokemonId>
        <S.PokemonName>{data.name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImage} />
        <S.PokemonContentType>
          {data.types.map((pokemonType, index) => (
            <S.PokemonType
              key={pokemonType.type.name}
              type={pokemonType.type.name}
            >
              <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
            </S.PokemonType>
          ))}
        </S.PokemonContentType>
      </S.LeftSide>

      <S.RightSide>
        <S.PokeballCardDetail source={pokeballCardImage} />
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          }}
        />
      </S.RightSide>
    </S.PokemonCard>
  );
}