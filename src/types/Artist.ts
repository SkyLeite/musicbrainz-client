import { Tag } from "./Tag";
import { Area } from "./Area";
import { Alias } from "../types";

export interface ArtistExtended {
  id: string;
  tags: Tag[];
  area: Area;
  country: string;
  isnis: string[];
  "type-id": string;
  type: "Person" | "Group" | "Orchestra" | "Choir" | "Character" | "Other";
  gender: "male" | "female" | "other";
  "gender-id": string;
  releases: string[];
  aliases: Alias[];
}

interface ArtistBase {
  name: string;
  "sort-name": string;
  disambiguation?: string;
}

export type Artist<T extends keyof ArtistExtended = never> = ArtistBase & Pick<ArtistExtended, Extract<keyof ArtistExtended, T>>;

export interface ArtistCredit {
  joinphrase?: string;
  name: string;
  artist: Artist<"id">;
}

export type ArtistInclude =  ("aliases" | "tags" | "recordings" | "releases")[];