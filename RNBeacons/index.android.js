import { DeviceEventEmitter } from 'react-native'
import Beacons from 'react-native-beacons-manager'

Beacons.detectIBeacons()

try {
  await Beacons.startRangingBeaconsInRegion('REGION1')
  console.log(`Beacons ranging started succesfully!`)
} catch (err) {
  console.log(`Beacons ranging not started, error: ${error}`)
}

DeviceEventEmitter.addListener('beaconsDidRange', (data) => {
  console.log('Found beacons!', data.beacons)
})