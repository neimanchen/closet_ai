import IconCloudyGusts from './weatherIcons/wi-cloudy-gusts.svg';
import IconCloudy from './weatherIcons/wi-cloudy.svg';
import IconSunnyOvercast from './weatherIcons/wi-day-sunny-overcast.svg';
import IconSunny from './weatherIcons/wi-day-sunny.svg';
import IconHail from './weatherIcons/wi-hail.svg';
import IconHurricane from './weatherIcons/wi-hurricane.svg';
import IconShowers from './weatherIcons/wi-showers.svg';
import IconSnow from './weatherIcons/wi-snow.svg';
import IconSprinkle from './weatherIcons/wi-sprinkle.svg';
import IconStorm from './weatherIcons/wi-storm-showers.svg';
import IconTornado from './weatherIcons/wi-tornado.svg';

const iconMap = {
  tornado: IconTornado,
  hurricane: IconHurricane,
  storm: IconStorm,
  snow: IconSnow,
  sprinkles: IconSprinkle,
  showers: IconShowers,
  hail: IconHail,
  cloudy: IconCloudy,
  windy: IconCloudyGusts,
  partly_cloudy: IconSunnyOvercast,
  sunny: IconSunny,
  default: IconSunny
}

export default iconMap;