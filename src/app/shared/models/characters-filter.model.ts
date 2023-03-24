import { CharacterGenderStrings } from "./character-gender.enum";
import { CharacterSpeciesStrings } from "./character-species.enum";
import { CharacterStatusStrings } from "./character-status.enum";

export interface CharactersFilter {
    name?: string;
    status?: CharacterStatusStrings;
    species?: CharacterSpeciesStrings;
    type?: string;
    gender?: CharacterGenderStrings;
  }