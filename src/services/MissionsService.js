import { dbContext } from "../db/DbContext.js";


class MissionsService {
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('rat', '-name -picture').populate('location')
    return missions
  }
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('rat', '-name -picture')
    await mission.populate('location')
    return mission
  }

  async getRatMissions(ratId) {
    const ratMissions = await dbContext.Missions.find({ ratId: ratId }).populate('location')
    return ratMissions
  }

  async getLocationMissions(locationId) {
    const locationMissions = await dbContext.Missions.find({ locationId: locationId }).populate('rat', '-name -picture')
    return locationMissions
  }
}

export const missionsService = new MissionsService()