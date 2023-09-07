import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy.js';
import { PlanetSchema } from '../models/Planet.js';
import { MoonSchema } from '../models/Moon.js';
import { ColonySchema } from '../models/Colony.js';
import { SpeciesSchema } from '../models/Species.js';



class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema);

  Planets = mongoose.model('Planet', PlanetSchema);

  Moons = mongoose.model('Moon', MoonSchema);

  Colonies = mongoose.model('Colony', ColonySchema);

  Species = mongoose.model('Species', SpeciesSchema);


}

export const dbContext = new DbContext()



// Galaxy
// Name string
// Stars number
//   ** planetCount: virtual

// Planet
// Name string
// Biome string
// Atmosphere bool
// galaxyID: objectID
//   ** galaxy virtual

// Moon
// Name string
// planetId ObjectId
//   ** planet virtual

// Colony
// Name string
// Poulation number
//   ** planetId: virtual
//     ** species virtual

// Species
// Name string
