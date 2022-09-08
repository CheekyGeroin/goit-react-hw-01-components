import user from './Profile/user'
import data from './Statistics/data'
import { Profile } from './Profile/Profile'
import {Statistics} from './Statistics/Statistics'

export const App = () => {
  return (<div>
    <Profile username={user.username} tag={user.tag} location={user.location} stats={user.stats} avatar={user.avatar} />
    <Statistics title={data.title} stats={data.stats} />
  </div>)
};
