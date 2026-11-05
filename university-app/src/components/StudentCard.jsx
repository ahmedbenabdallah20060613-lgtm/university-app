import './StudentCard.css';

function StudentCard(props) {
  const {
    nomComplet = "Nom & Prénom",
    email = "email@gmail.com",
    telephone = "Téléphone",
    filiere = "Filière",
    anneeEtude = "Année d'étude",
    groupe = "Groupe",
    ville = "Non renseignée"
  } = props;

  return (
    <div className="card-container">
      <h1 className="title">Fiche étudiant</h1>
      
      <div className="avatar-container">
        <img 
          src={props.image} 
          alt="Avatar étudiant" 
          className="student-avatar"
        />
      </div>
      
      <div className="info-section">
        <p><strong>Nom & Prénom:</strong> {nomComplet}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Téléphone:</strong> {telephone}</p>
        <p><strong>Filière:</strong> {filiere}</p>
        <p><strong>Année d'étude:</strong> {anneeEtude}</p>
        <p><strong>Groupe:</strong> {groupe}</p>
        <p><strong>Ville:</strong> {ville}</p>
      </div>

      <div className="button-container">
        <a href={`mailto:${email}`} className="contact-btn">
          Contacter
        </a>
      </div>
    </div>
  );
}

export default StudentCard;