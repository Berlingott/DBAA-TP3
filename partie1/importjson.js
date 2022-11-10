const Schema = mongoose.Schema

const eleveetcoursSchema = new Schema({
  prenom: {
    type: String,
    required: [true, 'eleveetcours must have prenom'],
    trim: true,
    unique: true,
  },
  nom: {
    type: String,
    required: [true, 'eleveetcours must have nom'],
    trim: true,
  },
  cours: {
    type: String,
    required: [true, 'cours is required'],
    trim: true,
  },
  departement: {
    type: String,
    required: [true, 'departement is required'],
    trim: true,
  },
  ecole: {
    type: String,
    required: [true, 'ecole is required'],
    trim: true,
  },
  cours_derniere_session: {
    type: String,
    required: [true, 'cours derniere session is required'],
    trim: true,
  },
})

const eleveetcours = mongoose.model('Freelancer', eleveetcoursSchema)

module.exports = eleveetcours