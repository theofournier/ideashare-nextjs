import { Profile } from "../../schema/types";
import { profilesMock } from "./mocks";

export async function getProfiles(): Promise<Profile[]> {
  return profilesMock;
}
