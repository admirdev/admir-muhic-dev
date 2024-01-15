import db from '../firebase/init.js'
import { collection, getDocs } from 'firebase/firestore'

class ProjectService {
  /**
   * This function returns a list of projects using Google Firestore
   */
  async getProjects() {
    var projects = []
    const querySnapshot = await getDocs(collection(db, 'projects'))

    querySnapshot.forEach((doc) => {
      projects.push(doc.data())
    })

    return projects.sort((a, b) => (a.url > b.url ? 1 : -1))
  }
}

export default new ProjectService()
