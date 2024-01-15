import db from '../firebase/init.js'
import { collection, getDocs } from 'firebase/firestore'

class AboutMeService {
  /**
   * This function returns the about me object using Google Firestore
   */
  async getAboutMe() {
    var aboutMe = []
    const querySnapshot = await getDocs(collection(db, 'about-me'))

    querySnapshot.forEach((doc) => {
      aboutMe.push(doc.data())
    })

    return aboutMe
  }
}

export default new AboutMeService()
