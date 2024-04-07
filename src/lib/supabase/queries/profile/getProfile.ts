import { Profile } from "../../schema/types";
import { profilesMock } from "./mocks";

export async function getProfile(id: string): Promise<Profile | undefined> {
  return profilesMock.find((profile) => profile.user.id === id);
}
