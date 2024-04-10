import { dbContext } from "../db/DbContext.js";


class MissionsService {
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('rat').populate('location', '-id')
    return missions
  }
}

export const missionsService = new MissionsService()